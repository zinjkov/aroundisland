<template>
  <b-navbar

    class="aroundFooter" toggleable type="light" variant="link" toggle-breakpoint="md">
    <div class="footer">
      <h5 align="left">
        Партнеры:
      </h5>
      <b-navbar-brand href="https://robocenter.org/"><img src="static/logo_robo.png"></b-navbar-brand>
      <b-navbar-brand href="https://www.dns-shop.ru/"><img height="70px" src="static/logo_dns.png"></b-navbar-brand>
      <b-navbar-brand href="http://www.msun.ru/"><img height="70px" src="static/logo_msu.png"></b-navbar-brand>
    </div>


    <b-nav is-nav-bar class="ml-auto">
      <div>
        <p class="social-text">Мы в социальных сетях: </p>
        <b-nav is-nav-bar>

          <b-button-group>
            <b-nav-item href="https://www.instagram.com/aroundisland.vl/">
              <span><icon class="icon" name="instagram"></icon></span>
            </b-nav-item>
            <b-nav-item href="https://www.facebook.com/aroundisland.vl/">
              <span><icon class="icon" name="facebook"></icon></span>
            </b-nav-item>
            <b-nav-item href="https://twitter.com/aroundislandvl/">
              <span><icon class="icon" name="twitter"></icon></span>
            </b-nav-item>
          </b-button-group>
          <b-nav-item>
            <div>
              <div><span>E-mail: aroundisland.vl@gmail.com</span></div>
              <div><span>Copyright © Команды Вокруг острова</span></div>
            </div>
          </b-nav-item>
        </b-nav>
      </div>
    </b-nav>

  </b-navbar>

</template>

<script>

  export default {
    name: 'around-footer'
  }
</script>

<style scoped>
  .aroundFooter {
    background-color: black;
    color: white;
    min-height: 75px;
  }

  .footer {

  }

  .icon {
    height: 40px;
    width: 40px;
  }
  span {
    font-size: 20px;
    color: white
  }
  .social-text {
    text-align: left;
    font-size: 20px;
    color: white;
  }
</style>
