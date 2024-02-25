const { createApp } = Vue;

createApp({
    data() {
        return {

            activeIndex: 0,
            myNewMessage: '',
            search: '',
            isTyping: false,

            randomAnswer: [
                "Ok.",
                "Grazie",
                "Ciao",
                "Sì",
                "Dovresti saperlo.",
                "Ci sentiamo dopo!",
                "Fai come vuoi.",
                "Non sei tu sono io",
                "Non sono arrabbiata.",
                "No"
            ],

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]

        }
    },


    computed: {
        filteredList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
            });
        }
    },

    methods: {
        getLastTime(contact) {
            if (contact.messages && contact.messages.length > 0) {
                const lastMessage = contact.messages[contact.messages.length - 1];
                const dateTime = lastMessage.date.split(' ');
                const timeSplit = dateTime[1].split(':');
                const hours = `${timeSplit[0]}:${timeSplit[1]}`;
                return hours;
            } else {
                return '';
            }
        },

        getTime(message) {
            const dateTime = message.date.split(' ');
            const timeSplit = dateTime[1].split(':');
            const hours = `${timeSplit[0]}:${timeSplit[1]}`;
            return hours;
        },

        activeContact(index) {
            this.activeIndex = index;
        },

        addNewMessage() {
            if (this.myNewMessage !== '') {
                const now = new Date();
                const date = now.toLocaleDateString();
                const time = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });

                this.contacts[this.activeIndex].messages.push({
                    date: `${date} ${time}`,
                    message: this.myNewMessage,
                    status: 'sent'
                });

                setTimeout(() => {
                    const randomIndex = Math.floor(Math.random() * this.randomAnswer.length);

                    this.contacts[this.activeIndex].messages.push({
                        date: `${date} ${time}`,
                        message: this.randomAnswer[randomIndex],
                        status: 'received'
                    });
                }, 1000);

                this.myNewMessage = '';
                this.isTyping = false;
            }
        },

        getLastMessage(contact) {
            if (contact.messages && contact.messages.length > 0) {
                const lastMessage = contact.messages[contact.messages.length - 1];
                let messageText = lastMessage.message;
                const maxLength = 30;

                if (messageText.length > maxLength) {
                    messageText = messageText.substring(0, maxLength) + '...';
                }

                return messageText;
            } else {
                return '';
            }
        },

        deleteMessage(messageIndex) {
            this.contacts[this.activeIndex].messages.splice(messageIndex, 1);
        },

        deleteAllMessage() {
            this.contacts[this.activeIndex].messages = [];
        },


        deleteConversation() {
            this.contacts[this.activeIndex] = [];
            this.contacts.splice(this.activeIndex, 1);
        },

        sendMessage() {
            if (this.myNewMessage !== '') {
                this.addNewMessage();
            }
        },

    }
}).mount("#app");