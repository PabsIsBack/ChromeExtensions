// content.js
//const bannerHTML = '<div id="extension-banner">Your banner content here</div>';
const bannerHTML = '<div id="cbHTML">  <body>    <div id="banner" style="position:absolute; top: calc(50vh - 170px); width:600px; left: calc(50% - 290px); padding:40px; background:#072B31; border:2px solid #FFE900">      <!-- Banner content goes here -->	  <h1 style="margin-bottom:40px; color:#FFE900">OW Warning</h1>	  <div id="banner-main">		  <!--<h2>Ocean Winds</h2>--> 		  <p>Caution! Do <span style="font-weight:bold; text-decoration:underline;">not</span> use <span style="font-weight:bold; text-decoration:underline;">confidential</span>, sensitive, or personal <span>information</span> in Chat GPT queries. Your conversations are not be private and will stay on its server archives fot itself development. Therefore, it is vital for both company and your personal safety to be <span style="font-weight:bold; text-decoration:underline;">careful</span> when using this tool.</p>		  <button id="close-button" style="padding:10px 20px; color:#072B31; background:#FFE900; font-weight:bold; margin:40px 150px 0; width:-webkit-fill-available;">Understood!</button>	  </div>    </div>  </body>    <script>  </script></div>';

document.body.insertAdjacentHTML('afterbegin', bannerHTML);

document.body.appendChild(banner);


function closePopUp() {
	document.getElementById("banner").remove();
}

document.getElementById("close-button").onclick = closePopUp;