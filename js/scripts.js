var app = new Vue({
  el: '#app',
  data: {
     monster:'',
     message: 'You loaded this page on ' + new Date(),
     s:[]
  },
  methods:{
    searchMonsters(){
      this.s=[];
      for(var i=0; i<monsters.length-1; i++){
        console.log(monsters[i].name);
        if(~monsters[i].name.toLowerCase().indexOf(this.monster.toLowerCase())){
          this.s.push(monsters[i]);
        }
      }
    }
  }
})
