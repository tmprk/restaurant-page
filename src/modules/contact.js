function loadContactContent() {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');

  const form = document.createElement('form');
  form.innerHTML = `<label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" value="John">
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" value="Doe">
    <label for="lname">Inquiry</label>
    <textarea name="textbox" cols="28" rows="12" placeholder="Write your inquiry here..."></textarea>
    <input type="submit" id="submit-btn" value="Submit">`;
  
  const map = document.createElement('div');
  map.setAttribute('class', 'mapouter');

  const canvas = document.createElement('iframe');
  canvas.setAttribute('id', 'gmap_canvas');
  canvas.setAttribute('src', 'https://maps.google.com/maps?q=seoul&t=&z=13&ie=UTF8&iwloc=&output=embed');
  canvas.setAttribute('frameborder', 0);
  canvas.setAttribute('scrolling', 'yes');

  map.appendChild(canvas);
  contact.appendChild(form);
  contact.appendChild(map);
  return contact;
}

function addContactContent() {
  var home = document.getElementById('home');
  home.innerHTML = '';
  home.appendChild(loadContactContent());
}

export default addContactContent;

/*
<div id="contact">
  <form action="">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" value="John">
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" value="Doe">
    <label for="lname">Inquiry</label>
    <textarea name="textbox" cols="28" rows="12" placeholder="Write your inquiry here..."></textarea>
    <input type="submit" id="submit-btn" value="Submit">
  </form>
  <div class="mapouter">
    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=seoul&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
      scrolling="yes">
    </iframe>
  </div>
</div>
*/