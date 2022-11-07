const {createApp} = Vue;

createApp({
    data(){
        return {
            user: {
                userName: 'Sofia',
                userImage: 'assets/img/avatar_io.jpg'
            },
            contacts: [
                {
                    nome: 'Michele',
                    image: 'assets/img/avatar_1.jpg'
                },
                {
                    nome: 'Fabio',
                    image: 'assets/img/avatar_2.jpg'
                },
                {
                    nome: 'Samuele',
                    image: 'assets/img/avatar_3.jpg'
                },
                {
                    nome: 'Alessandro B.',
                    image: 'assets/img/avatar_4.jpg'
                },
                {
                    nome: 'Alessandro L.',
                    image: 'assets/img/avatar_5.jpg'
                },
                {
                    nome: 'Claudia',
                    image: 'assets/img/avatar_6.jpg'
                },
                {
                    nome: 'Federico',
                    image: 'assets/img/avatar_7.jpg'
                },
                {
                    nome: 'Davide',
                    image: 'assets/img/avatar_8.jpg'
                }
            ]
        }
    }
}).mount('#app')
    
