import { NextResponse } from "next/server";
import admin from "firebase-admin";
import { z } from "zod";

// --- Inicialização do Firebase Admin ---
if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  });
}

const db = admin.firestore();

// --- Schema de Validação Atualizado ---
const agendamentoSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome completo é obrigatório"),
  telefone: z.string().min(10, "Telefone inválido"),
  dataNascimento: z.string().nonempty("Data de nascimento é obrigatória"),
  horario: z.string().nonempty("Horário é obrigatório"), // Novo campo de horário
});


export async function POST(request) {
  try {
    const body = await request.json();
    
    // Valida os dados recebidos
    const validation = agendamentoSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Dados inválidos", details: validation.error.flatten() }, { status: 400 });
    }

    const { nomeCompleto, telefone, dataNascimento, horario } = validation.data;

    // Cria um novo documento na coleção "agendamentos" com os dados atualizados
    const agendamentoRef = await db.collection("agendamentos").add({
      nomeCompleto,
      telefone,
      dataNascimento,
      dataDoExame: "05/07/2025", // Data fixa
      horario, // Horário escolhido pelo usuário
      status: "pendente",
      criadoEm: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ message: "Agendamento recebido com sucesso!", id: agendamentoRef.id }, { status: 201 });

  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}