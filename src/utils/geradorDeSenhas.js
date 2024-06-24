export function gerarSenha() {
  const digitos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let senha = '';
  for (let i = 0; i < 8; i++) {
    const aleatorio = Math.floor(Math.random() * digitos.length);
    senha += digitos[aleatorio];
  }
  return senha;
}
