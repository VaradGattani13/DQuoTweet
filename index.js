
let realdata="";
const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const tweeet=document.getElementById("tweet");


const newquote=document.getElementById("newquote");
letqdata=""

    const tweet=()=>{
        let tweetp="https://twitter.com/intent/tweet";
        window.open(tweetp);


    };
    const getnewquotes=()=>{
        let randomno=Math.floor(Math.random()*1000);
if(realdata[randomno].author==null){
    author.innerText="unknown";
    
}else{(author.innerText=realdata[randomno].author);

}
        console.log(realdata[randomno].text);
        console.log(realdata[randomno].author);

        // let rnum=Math.floor(Math.random()*10)  ;
        // console.log(rnum);
        // console.log(realdata[rnum].text);
        // console.log(realdata[rnum].author);
        // document.write("hello")
        // document.write(realdata[rnum].author);
        
        quotes.innerText=`${realdata[randomno].text}`;
        
        author.innerText=`${realdata[randomno].author}`;

        // console.log(randomno)


        // quotes.innerText=`${realdata[rnum].author}`;

        

    }; 

    // getnewquotes 
    const getQuotes=async()=>{
        const api="https://type.fit/api/quotes";
        try{
            let data=await fetch(api);
            realdata=await data.json();

            
            getnewquotes();

            // console.log(realdata[100].text);
            // console.log(realdata[100].author);
            // console.log(realdata[100].author);
            // console.log(realdata.length);   //TOTAL KITNE QUOTES HAI

            // console.log(data.json());
        }catch(error){}

    };
    tweeet.addEventListener('click',tweet);

    newquote.addEventListener('click',getnewquotes  );

     getQuotes();
