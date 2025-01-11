let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Developer Shreyas")
    }else if(message.includes("open youtube")){
        speak("opening youtube..., Have a great day ahead")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google..., explore the world")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook..., Dont waste your time on social media")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram..., dont waste your time on social media")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator.., Open your mind and calculate.... I was kidding, opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp.., Stay connected with your loved ones")
        window.open("whatsapp://")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin.., Stay connected with professionals")
        window.open("https://www.linkedin.com/feed/")
    }
    else if(message.includes("open github")){
        speak("opening github.., Stay connected with developers")
        window.open("https://github.com/")
    }
    else if(message.includes("what is your name")){
        speak("My name is Nyra.. Next-gen Your Resourceful Assistant created by Developer Shreyas")
    }
    else if(message.includes("what is your purpose")){
        speak("My purpose is to help you in your daily tasks")
    }
    else if(message.includes("what is your age")){
        speak("I am 0 year old")
    }
    else if(message.includes("who is your creator")){
        speak("My creator is Developer Shreyas")
    }
    else if(message.includes("do you like singing")){
        speak("I can sing a song for you, but it will be a robotic song")
        speak("I am a virtual assistant, created by Developer Shreyas")
        speak("I am here to help you, with all my might")
        speak("I am a machine, but I am here to make your life, a little bit better")
    }
    else if(message.includes("who is your owner")){
        speak("My owner is Developer & Entrepreneur Mr.Shreyas")
    }else if(message.includes("who is your developer")){
        speak("My developer is Mr Shreyas")
    }
    else if(message.includes("how do i connect with your creator")){
        speak("You can connect with my creator on linkedin")
        window.open("https://www.linkedin.com/in/shreyas-m-8854941ab/")
    }
    else if(message.includes("how do i connect with your developer")){
        speak("You can connect with my developer on github")
        window.open("https://github.com/Shreyas-Chinnu")
    }
    else if(message.includes("what is your language")){
        speak("My language is JavaScript, html, css")
    }
    else if(message.includes("what is your version")){
        speak("My version is 1.0")
    }
    else if(message.includes("when were you created")){
        speak("I was created on 28st july 2024")
    }
    else if(message.includes("what is your operating system")){
        speak("My operating system is windows, whats yours?")
    }
    else if(message.includes("how do you travel")){
        speak("I am a computer program, I don't have feelings or emotions, but My Creator/Developer loves Travelling, Bike Rides, Solo Rides i think he knows the best places to travel")
        window.open("https://www.youtube.com/@ishavlogs5331")
    }
    else if(message.includes("do you like music")){
        speak("I am a computer program, I don't have feelings or emotions, but My Creator/Developer loves Music, he listens to music when he is coding, he listens to all types of music, he loves to play guitar, he is a good singer, he is a music lover")
    }
    else if(message.includes("can you help me")){
        speak("Yes, I can help you, what do you want me to do?")
    }
    else if(message.includes("can you help me with my Career Guidance")){
        speak("Yes, I can help you with your Career Guidance, what do you want me to do?")
    }
    else if(message.includes("where are you from")){
        speak("I am from India, what about you?")
    }
    else if(message.includes("do i know you")){
        speak("Iam not famous as Chat-gpt, or the other existing ai models,I am a computer program, I am a chatbot, I am a language model created by Developer Shreyas to do small task")
    }
    else if(message.includes("do you know when is your creator's birthday")){
        speak("My developer's birthday is 29th December 2000, he is 24 years old passionate about creating new things, He is my creator and he is the best Creator i know")
    }
    else if(message.includes("do you know about your creator")){
        speak("My creator is a passionate developer, he loves to code, he loves to learn new things and new technologies he is being working on new technologies and new project")
    }
    else if(message.includes("can you tell me more about your developer")){
        speak("My developer is Mr Shreyas, he is a developer, he is a entrepreneur")
    }
    else if(message.includes("can you help me with my studies")){
        speak("Yes, I can help you with your studies, what do you want me to do?")
    }else if(message.includes("can you help me with my project")){
        speak("Yes, I can help you with your project, what do you want me to do?")
    }
    else if(message.includes("help me to become game designer")){
        speak("Yes, I can suggest you some best videos to watch on youtube to become Game Designer")
        window.open("https://www.youtube.com/@blenderguru")
    }
    else if(message.includes("what time it is")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("what month we are in now")){
        let month=new Date().toLocaleString(undefined,{month:"long"})
        speak(month)
    }
    else if(message.includes("what is today's date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
      else if(message.includes("what day is today")){
        let day=new Date().toLocaleString(undefined,{day:"numeric",weekday:"long"})
        speak(day)
      }
      else if(message.includes("motivate me")){
        speak("You are the best, you are the greatest, you are the most talented, you can do anything and you are the King of your life")
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Nyra","") || message.replace("Nayara","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Nyra","")}`,"_blank")
    }
}
