<template>
  <div class="Home">
      <h1>{{title}}</h1>
      <div class="wrapper">
	<!---->
	<section class="top-container">
		<header class="showcase">
			<h1 class="haus"> Holy Angel University </h1>
			<p class="haus"> Laus Deo Semper </p>
			<a href="#" class="btn"> Read More </a>
		</header>
		<div class="top-box top-box-a">
			<h4> Enrollment is Ongoing </h4>
			<a href="#" class="btn"> Enroll Now! </a>
		</div>
		<div class="top-box top-box-b">
			<h4> News & Announcement</h4>
			<a href="" class="btn"> View All News </a>
		</div>
	</section>
	<!---->
	<section class="boxes">
		<div class="box">
			<i class="fas fa-chart-pie fa-4x"></i>
			<h3> SOC </h3>
			<p> School of Computing</p>
		</div>
		<div class="box">
			<i class="fas fa-globe fa-4x"></i>
			<h3> SEA </h3>
			<p> School of Engineering and Architecture </p>
		</div>
		<div class="box">
			<i class="fas fa-cog fa-4x"></i>
			<h3> SBA </h3>
			<p> School of Business and Accountancy </p>
		</div>
		<div class="box">
			<i class="fas fa-users fa-4x"></i>
			<h3> SHTM </h3>
			<p> School of Hospitality Tourism Management</p>
		</div>
	</section>
	<!---->
	<section class="info">
		<img src="https://www.hau.edu.ph/images/logo-circle.png">
		<div>
			<h2> <br><br><br><br>WELCOME BACK, ANGELITES! </h2>
			<p>
        <br><br>For over two years since the COVID-19 pandemic, Holy Angel University has worked hard to retrofit its campus facilities and buildings to carefully bring back students for the classroom experience while following strict health and safety protocols. Now that we are reopening the campus for limited face-to-face laboratory classes, Watch this video to be guided on the protocols and reminders during your stay at the campus grounds.
			</p>
			<a href="#" class="btn"> Learn More </a>
		</div>
	</section>
	<!-- Footer -->
	<footer>
		<p> WCSERVER &copy; WD-201 </p>
	</footer>
</div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
      return{}
  }
}
</script>
<style>@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
body {
  background-color: #CCCCCC;
  box-sizing: border-box;
  color: #333333;
  font-family: "Poppins", sans-serif;
  line-height: 1.4;
  margin: 30px 50px;
}
body .btn {
  background: #333333;
  border: 0;
  color: #FFFFFF;
  padding: 0.6rem 1.3rem;
  text-decoration: none;
}
body .wrapper {
  display: grid;
  grid-gap: 20px;
}
body .wrapper .main-nav ul {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
}
body .wrapper .main-nav a {
  background: #DDDDDD;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  color: #333333;
  display: block;
  font-size: 1.1rem;
  padding: 0.8rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
body .wrapper .main-nav a:hover {
  background: #333333;
  color: #FFFFFF;
}
body .wrapper .top-container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas: "showcase showcase top-box-a" "showcase showcase top-box-b";
}
body .wrapper .top-container .showcase {
  align-items: start;
  background: url(https://www.hau.edu.ph/images/banner-3.jpg);
  background-position: center;
  background-size: cover;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  display: flex;
  flex-direction: column;
  grid-area: showcase;
  justify-content: center;
  min-height: 100px;
  padding: 1rem;
}
body .wrapper .top-container .showcase h1 {
  color: #FFFFFF;
  font-size: 4rem;
  margin-bottom: 0;
}
body .wrapper .top-container .showcase p {
  color: #FFFFFF;
  font-size: 1.3rem;
  margin-top: 0;
}
body .wrapper .top-container .top-box {
  align-items: center;
  background: #DDDDDD;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  display: grid;
  justify-items: center;
  padding: 1.5rem;
}
body .wrapper .top-container .top-box .price {
  font-size: 2.5rem;
}
body .wrapper .top-container .top-box-a {
  grid-area: top-box-a;
}
body .wrapper .top-container .top-box-b {
  grid-area: top-box-b;
}
body img {
  max-width: 100%;
}
body .boxes {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
body .box {
  background: var(--primary);
  text-align: center;
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow);
}
body .info {
  background: var(--primary);
  box-shadow: var(--shadow);
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
}
body .portfolio {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
body .portfolio img {
  width: 100%;
  box-shadow: var(--shadow);
}
body footer {
  margin-top: 2rem;
  background: var(--dark);
  color: var(--light);
  text-align: center;
  padding: 1rem;
}


 </style>
