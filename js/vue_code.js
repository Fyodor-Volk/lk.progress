
var app = new Vue({
  
    el: '#app',
    
    data: {

      permission: "", //согласие на обьработку данных

      showCard:false,
      cards: [
        
        
      ],
      newCards:{

        number: '',
        rate:' ',
        numberOfTrips:'',
        ticketSeries: '',
        ticketNumber:'',

      },

      login: '',
      phone_code: '',
      phone: '',

      
      
      newUser:{
        login: '',
        phone_code: '',
        phone: '',
        e_mail: '',
      },

      user:[
          {
            phone_code: '1111',
            login: 'User01',
            phone: '8111111111',
            e_mail: "jhvfjdsh@app.uy", 
          }
      ],
      


      
     
    },
    
    methods:{
      goToPage() {
        window.location.href = "autification.html";
        
      },
      auth(){  //авторизация
        if(this.login === this.user[0].login && this.phone === this.user[0].phone){
          this.goToPage();

        }
        else{
          alert("Неверно введено имя пользователя или номер телефона")
        }
      },
      goToPage2() {
        window.location.href="index.html";
      },
      confirmation(){  // подтверждение
        if(this.phone_code === this.user[0].phone_code){
          this.goToPage2();
          
        }
        else{
          alert("Неверно введен код")
        }
      },
      registrUser(){
        if(this.permission){
          this.goToPage()
        }
      },
      randomInteger(min, max) {
        
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
      addCard(){
        let  u = this.randomInteger(1,60)
        if(this.newCards.number!=" "){
          this.cards.push({
            number: this.newCards.number,
            rate: '60 ',
            numberOfTrips:u,
            ticketSeries: this.newCards.ticketSeries,
            ticketNumber:this.newCards.ticketNumber,
          });
          this.newCards.number = "",
          this.newCards.ticketSeries  = "",
          this.newCards.ticketNumber  = "", 
          
          this.showCard=true;

          

        }
        
      },
      

      addUser(){
        if(this.newUser.login!=" " && this.newUser.phone!=" " && this.newUser.e_mail!=" "){
          this.user.push({
            login: this.newUser.login,
            phone: this.newUser.phone,
            e_mail:this.newUser.e_mail,
            phone_code: "1111",
          });
          this.newUser.login = "",
          this.newUser.phone  = "",
          this.newUser.e_mail = "";
           
          if(this.permission){
          this.goToPage()
          }
          
        }
      }
      
    }
    

  })
  