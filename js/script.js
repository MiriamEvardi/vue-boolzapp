const { createApp } = Vue;

createApp({
    data() {
        return {

            activeIndex: 0,
            myNewMessage: '',
            search: '',
            newContact: '',
            showSplash: true,
            isDarkMode: false,

            randomAnswer: [
                "Ok.",
                "Grazie",
                "Ciao",
                "Sì",
                "Dovresti saperlo.",
                "Lasciami stare",
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
                    lastActivity: '16:15',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '16:30',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '16:15',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '15:50',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '15:50',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '15:50',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '15:50',
                    isTyping: false,
                    online: false,
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
                    lastActivity: '15:51',
                    isTyping: false,
                    online: false,
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

    mounted() {
        // show splash page
        setTimeout(() => {
            this.showSplash = false;
        }, 1000);

        window.addEventListener('resize', function () {
            const sideBarDiv = document.getElementById("sideBar");
            const textDiv = document.getElementById('textChat');

            if (window.innerWidth > 768) {
                sideBarDiv.style.width = "0";
                textDiv.style.width = "0";
                sideBarDiv.style.flexGrow = "1";
                textDiv.style.flexGrow = "2";
            } else {
                sideBarDiv.style.width = "0";
                textDiv.style.width = "100vw";
                sideBarDiv.style.flexGrow = "0";
                textDiv.style.flexGrow = "1";
            }
        })
    },

    methods: {

        // last message time send/received
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

        // obtain locale time for messages
        getTime(message) {
            const dateTime = message.date.split(' ');
            const timeSplit = dateTime[1].split(':');
            const hours = `${timeSplit[0]}:${timeSplit[1]}`;
            return hours;
        },

        activeContact(index) {
            this.activeIndex = index;

            const sideBarDiv = document.getElementById("sideBar");
            const textDiv = document.getElementById('textChat');

            if (window.innerWidth <= 768) {
                sideBarDiv.style.width = "0vw";
                textDiv.style.width = "100vw";
                sideBarDiv.style.flexGrow = "0";
                textDiv.style.flexGrow = "1";
            }
        },

        // obtained starting time used in addNewMessage
        getTimeStamp() {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
            const timer = `${date} ${time}`
            return timer;
        },

        // obtained locale time (hour + minutes)
        getHour() {
            const now = new Date();
            const time = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
            return time;
        },


        // send/receive new message
        addNewMessage() {
            if (this.myNewMessage !== '') {

                this.contacts[this.activeIndex].messages.push({
                    date: `${this.getTimeStamp()}`,
                    message: this.myNewMessage,
                    status: 'sent'
                });
                this.scrollToBottom();

                const activeChat = this.activeIndex;

                // set start "is Typing" 1 second after send the message
                setTimeout(() => {
                    this.contacts[activeChat].isTyping = true;

                }, 1000);


                // automatic answer + "is typing" finish
                setTimeout(() => {
                    const randomIndex = Math.floor(Math.random() * this.randomAnswer.length);

                    this.contacts[activeChat].messages.push({
                        date: `${this.getTimeStamp()}`,
                        message: this.randomAnswer[randomIndex],
                        status: 'received'
                    });
                    this.scrollToBottom();
                    this.contacts[activeChat].isTyping = false;
                    this.contacts[activeChat].online = true;
                }, 3000);

                // set 2 seconds "online" after received the answer 
                setTimeout(() => {
                    this.contacts[activeChat].online = false;
                    this.contacts[activeChat].lastActivity = this.getHour();

                }, 5000);
                this.myNewMessage = '';
            }
        },

        // last message
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

        // delete a single message
        deleteMessage(messageIndex) {
            this.contacts[this.activeIndex].messages.splice(messageIndex, 1);
        },

        // delete all messages
        deleteAllMessage() {
            this.contacts[this.activeIndex].messages = [];
        },

        // delete conversation
        deleteConversation() {
            this.contacts.splice(this.activeIndex, 1);

            if (this.activeIndex >= this.contacts.length) {
                this.activeIndex = this.contacts.length - 1;
            }
        },

        // can't send an empty message
        sendMessage() {
            if (this.myNewMessage !== '') {
                this.addNewMessage();
            }
        },

        // automatic scroll
        scrollToBottom() {
            const target = this.$refs.myScrollTarget;
            this.$nextTick(() => {
                target.scrollTo(
                    {
                        top: target.scrollHeight,
                        left: 0,
                        behavior: "smooth"
                    }
                );
            });
        },

        // add new contact
        addNewContact() {
            this.contacts.push({
                name: this.newContact,
                avatar: './img/default-avatar.jpg',
                visible: true,
                lastActivity: this.getTimeStamp(),
                isTyping: false,
                online: false,
                messages: []
            })
        },

        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            const toggleBtn = document.getElementById('toggle-btn');

            if (toggleBtn) {
                toggleBtn.classList.toggle('toggle-btn--dark', this.isDarkMode);
            }
            document.documentElement.classList.toggle('dark-mode', this.isDarkMode);
        },

        backToContacts() {
            const sideBarDiv = document.getElementById("sideBar");
            const textDiv = document.getElementById('textChat');

            if (window.innerWidth <= 768) {
                sideBarDiv.style.width = "100vw";
                textDiv.style.width = "0vw";
                sideBarDiv.style.flexGrow = "1";
                textDiv.style.flexGrow = "0";
            }
        }

    }
}).mount("#app");