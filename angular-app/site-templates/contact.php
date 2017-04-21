<section class="contact-intro">
  <h1>Contact Me</h1>
  <p>Please feel free to contact me for more information or a quote on what I can do for you!</p>
</section>
<form class="contact-form" method="POST" action="/#mail">
  <p>Name<span>*</span></p><input type="text" name="name" value='<?php echo $name;?>' required>
  <p>Email<span>*<?php echo $emailErr;?></span></p><input type="text" name="email" value="<?php echo $email;?>" required>
  <p>Phone</p><input type="tel" name="phone" value="<?php echo $phone; ?>">
  <p>Interested In:</p>
  <select name="service" size="1">
    <option value="Website Development">Website Development</option>
    <option value="Website Maintenance">Website Maintenance</option>
    <option value="Wordpress">Wordpress</option>
  </select>
  <p>Message<span>*</span></p><textarea name="message" rows="6" cols="25" required><?php echo $message;?></textarea><br/>
  <input class="button" type="submit" value="Send"><input class="button" type="reset" value="Clear">
</form>
<ul class="contact-social">
  <li id="li" ng-click="menuClick();"><a href="https://www.linkedin.com/in/daniel-frank-598b9960" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
  <li id="fb" ng-click="menuClick();"><a href="http://www.facebook.com/dfwebdev" target="_blank"><i class="fa fa-facebook-square" ></i></a></li>

</ul>
