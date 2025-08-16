const fs = require('fs');
const path = require('path');

console.log('🧪 Testando API de upload em lote...\n');

// Verificar se o servidor está rodando
async function testServer() {
  try {
    const response = await fetch('http://localhost:3000/api/auth/session');
    if (response.ok) {
      console.log('✅ Servidor está rodando');
      return true;
    }
  } catch (error) {
    console.log('❌ Servidor não está rodando');
    console.log('💡 Execute: npm run dev');
    return false;
  }
}

// Verificar se os buckets do Supabase existem
async function testSupabaseConnection() {
  try {
    const response = await fetch('http://localhost:3000/api/upload-ebooks-batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: true }),
    });

    const data = await response.json();

    if (response.status === 401) {
      console.log('✅ API está funcionando (autenticação requerida)');
      return true;
    } else if (response.status === 500 && data.error?.includes('Supabase')) {
      console.log('⚠️  API está funcionando, mas Supabase precisa ser configurado');
      return false;
    } else {
      console.log('✅ API está funcionando');
      return true;
    }
  } catch (error) {
    console.log('❌ Erro ao testar API:', error.message);
    return false;
  }
}

// Função principal
async function main() {
  console.log('🔍 Verificando configuração...\n');

  const serverRunning = await testServer();
  if (!serverRunning) return;

  const apiWorking = await testSupabaseConnection();

  console.log('\n📊 Resultado:');
  if (apiWorking) {
    console.log('🎉 Tudo pronto para testar o upload em lote!');
    console.log('\n🚀 Para testar:');
    console.log('1. Acesse http://localhost:3000/admin/ebooks');
    console.log('2. Clique em "Upload em Lote"');
    console.log('3. Arraste um arquivo ZIP com PDFs');
    console.log('4. Configure os valores padrão');
    console.log('5. Clique em "Iniciar Upload"');
  } else {
    console.log('⚠️  Configure o Supabase Storage primeiro');
    console.log('📖 Veja: config/env-setup.md');
  }
}

main().catch(console.error);
