const books = Vue.createApp({
    data() {
        return{
           showBooks: true,
           btitle:'The Ledger',
           bauthor:'Reuben Sibal',
           year:2002
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks= !this.showBooks
        }
    }

});
books.mount("#books")