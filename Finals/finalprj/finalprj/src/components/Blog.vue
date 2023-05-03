<template>
    <div class="blog">
        <h1>{{title}}</h1>
        <div class="bloginfo">
            <h1>Cycling</h1>
            <img id="pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5A6Lo_UWBwoYCL2U34qLkQ-eSmSWJapC39hGdl-iXv-23UOIiR5enleL8NKxBcDkx7Y&usqp=CAU" alt="Cyclist"> <br>
            <p>Cycling is not only interesting, but it also helped me achieve positive health effects specially to my muscles, including legs, core, and upper body, are used when I ride my bike. Cycling frequently can help you build stronger muscles, boost your endurance, and improve your cardiovascular health and also cycling improved my physical and mental health in addition to my physical health that I have a fatty liver. Lastly I ride my bike for leisure or a alternative vehicle to travel without consuming gas and economy friendly.</p>
        </div>

        <div class="bloginfo">
            <h1>Basketball</h1>
            <img id="pic" src="https://ca-times.brightspotcdn.com/dims4/default/9688657/2147483647/strip/false/crop/4705x2647+0+0/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5b%2F96%2F853655664bc0af8a5739293f457d%2Fadobestock-411089853.jpeg" alt="Basketball"> <br>
            <p>I can say with confidence that basketball is my favorite sport because I'm a big fan of it. Every time I watch or play it, the game's fast-paced and dynamic nature puts me on the edge of my seat and makes it an exhilarating experience. Additionally, I can decompress by playing basketball as an IT student, which is very helpful for me since I may be under a lot of stress from my studies or from spending a lot of time in front of a computer. Playing basketball and getting some exercise helps me unwind and clear my head, which boosts my productivity and improves my academic achievement.</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'blog',
    data () {
        return{
            title: 'Blog'
        }
    }
}
</script>

<style scoped>

.bloginfo{
    margin: 50px 100px;
    background-color: #c9bfbf ;
}

#pic{
    width: 430px;
    margin-top: 10px;
}

p{
    margin-top: 30px;
}


</style>