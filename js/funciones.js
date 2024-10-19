function prueba(){
    let who = ["The dog", "My grandma", "The Mailman", "My bird"];

    let action = ["ate", "peed", "crushed", "broke"];

    let what = ["My homework" , "My phone", "the car"];

    let when= ["before the class", "wen i was sleeping", "while i was exercising", "during ny launch", "shile I was praying"];


    let x = Math.floor((Math.random() * 3) + 0);
    let x2 = Math.floor((Math.random() * 3) + 0);
    let x3 = Math.floor((Math.random() * 3) + 0);
    let x4 = Math.floor((Math.random() * 3) + 0);
    document.getElementById("excusas").innerHTML = who[x] + " "+  action[x2]+ " "+ what[x3] +" "+  when[x4];

}