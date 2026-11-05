const { createApp } = Vue;

// 1. Componente do Card de Produto
const ProductCard = {
  name: 'ProductCard',
  props: {
    nome: String,
    preco: Number,
    imagem: String
  },
  template: `
    <div class="card-produto">
      <img :src="imagem" :alt="nome" class="imagem-produto">
      <h3>{{ nome }}</h3>
      <p class="preco">R$ {{ preco.toFixed(2) }}</p>
      <button @click="comprar" class="btn-adicionar">Adicionar ao Carrinho</button>
    </div>
  `,
  methods: {
    comprar() {
      this.$emit('adicionar');
    }
  }
};

// 2. Aplicação Principal (Componente Pai)
const app = createApp({
  data() {
    return {
      totalCarrinho: 0,
      termoBusca: '',
      produtos: [
        { 
          id: 1, 
          nome: 'Camiseta Totus Tuus', 
          preco: 59.90, 
          imagem: 'imagens/totus-tuus.jpeg' // Ajuste para a extensão correta (.jpg, .jpeg ou .png)
        },
        { 
          id: 2, 
          nome: 'Camiseta Sagrado Coração de Jesus', 
          preco: 64.90, 
          imagem: 'imagens/sagrado-coração.jpeg' 
        },
        { 
          id: 3, 
          nome: 'Camiseta Auspice Maria', 
          preco: 54.90, 
          imagem: 'imagens/auspice-maria.jpeg' 
        },
        { 
          id: 4, 
          nome: 'Camiseta São Miguel Arcanjo', 
          preco: 59.90, 
          imagem: 'imagens/sao-miguel.jpeg' 
        }
      ]
    }
  },
  computed: {
    produtosFiltrados() {
      const busca = this.termoBusca.toLowerCase().trim();
      return this.produtos.filter(produto => 
        produto.nome.toLowerCase().includes(busca)
      );
    }
  },
  methods: {
    adicionarAoCarrinho() {
      this.totalCarrinho++;
    }
  }
});

app.component('product-card', ProductCard);
app.mount('#app');