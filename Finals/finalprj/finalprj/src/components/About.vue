<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
      rel="stylesheet"
      type="text/css"
    />
    <div class="container">
      <div class="header">
        <div class="full-name">
          <span class="first-name">Reuben Rob</span>
          <span class="last-name">Sibal</span>
        </div>
        <div class="contact-info">
          <span class="email">Email: </span>
          <span class="email-val">sibalreuben@gmail.com</span>
          <span class="separator"></span>
          <span class="phone">Phone: </span>
          <span class="phone-val">0951-420-9285</span>
        </div>

        <div class="about">
          <span class="position"></span>
        </div>
      </div>
      <div class="details">
        <div class="section">
          <div class="section__title">About</div>
          <div class="section__list">
            <div class="section__list-item">
              <div class="left">
                <div class="name">Birthdate: October 05 2002</div>
                <div class="addr">Address: 1910 PlantersVille Mabiga, Mabalacat City Pampanga</div>
                <div class="fb">Facebook: www.facebook.com/reubenrobbb</div>
              </div>
            </div>
            <div class="section__list-item">
              <div class="left">
                <div class="name">Class Code: 6WCSERVER-2091</div>
                <div class="addr">Section: WD-210</div>
                <div class="duration">Student ID: 20841412</div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}

.container {
  max-width: 700px;
  background: #fff;
  margin: 0px auto 0px;
  box-shadow: 1px 1px 2px #dad7d7;
  border-radius: 3px;
  padding: 40px;
  margin-top: 50px;
}

.header {
  margin-bottom: 30px;
}
.header .full-name {
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.header .first-name {
  font-weight: 700;
}
.header .last-name {
  font-weight: 300;
}
.header .contact-info {
  margin-bottom: 20px;
}
.header .email,
.header .phone {
  color: #999;
  font-weight: 300;
}
.header .separator {
  height: 10px;
  display: inline-block;
  border-left: 2px solid #999;
  margin: 0px 10px;
}
.header .position {
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline;
}

.details {
  line-height: 20px;
}
.details .section {
  margin-bottom: 40px;
}
.details .section:last-of-type {
  margin-bottom: 0px;
}
.details .section__title {
  letter-spacing: 2px;
  color: #54afe4;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.details .section__list-item {
  margin-bottom: 40px;
}
.details .section__list-item:last-of-type {
  margin-bottom: 0;
}
.details .left,
.details .right {
  vertical-align: top;
  display: inline-block;
}
.details .left {
  width: 60%;
}
.details .right {
  tex-align: right;
  width: 39%;
}
.details .name {
  font-weight: bold;
}
.details a {
  text-decoration: none;
  color: #000;
  font-style: italic;
}
.details a:hover {
  text-decoration: underline;
  color: #000;
}
.details .skills__item {
  margin-bottom: 10px;
}
.details .skills__item .right input {
  display: none;
}
.details .skills__item .right label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c3def3;
  border-radius: 20px;
  margin-right: 3px;
}
.details .skills__item .right input:checked + label {
  background: #79a9ce;
}
</style>