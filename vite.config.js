import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/vite-project/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        cadastro: resolve(__dirname, 'cadastro.html'),
        cardapio: resolve(__dirname, 'cardapio.html'),
        carrinho: resolve(__dirname, 'carrinho.html'),
        pedidos: resolve(__dirname, 'pedidos.html')
      }
    }
  }
})