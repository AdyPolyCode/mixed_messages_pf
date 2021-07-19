const motivationMSG = ['All our dreams can come true, if we have the courage to pursue them – Walt Disney', 'The secret of getting ahead is getting started  – Mark Twain',
'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed – Michael Jordan',
'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve – Mary Kay Ash',
'The best time to plant a tree was 20 years ago. The second best time is now – Chinese Proverb'];

const adviceMSG = ["What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain ― Maya Angelou",
"Try to be a rainbow in someone's cloud ― Maya Angelou", "Never miss a good chance to shut up ― Will Rogers", "We cannot change the cards we are dealt, just how we play the hand ― Randy Pausch",
"Never ruin an apology with an excuse ― Benjamin Franklin"];

const thoughtMSG = ['If you lead me astray, then my wanderings will bring me to my destination', 'Poetry is inspired by the elements of random thoughts, an overflow of gazing at the unseen',
'Some express, some write and some just feel it', 'I just want to this about that', 'Logical thinking can outwit random processing'];



const msgGenerator = () => {
    const cat = Math.floor(Math.random() * 3);
    const rnd = Math.floor(Math.random() * 5);

    if (cat === 0){
        return 'Random message from motivational thoughts: ' + motivationMSG[rnd];
    }else if (cat === 1){
        return 'Random message from advice thoughts: ' + adviceMSG[rnd];
    }else{
        return 'Random message from random thoughts: ' + thoughtMSG[rnd];
    };
};


console.log(msgGenerator())

module.exports.msgGenerator = msgGenerator;