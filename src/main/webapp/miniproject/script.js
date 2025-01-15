//K-POP 버튼
document.addEventListener("DOMContentLoaded", function() {
	// K-POP 버튼 클릭 이벤트
	document.getElementById("kpop-button").addEventListener("click", function(e) {
		e.preventDefault(); // 기본 링크 동작 방지

		// 메인 콘텐츠 업데이트
		document.getElementById("main-image").src = "images/bts.jpg";
		document.getElementById("main-overlay").innerHTML = `
        <h1>방탄소년단 - MAP OF THE SOUL : 7</h1>
        <p>2월 21일, 2020</p>
        <p>방탄소년단의 정규 4집 두번째 시리즈이다. 온전한 나를 찾기 위한 솔직한 이야기, 
        이번 앨범은 내면의 그림자를 마주하는 내용이다.</p>
      `;

		// 사이드 콘텐츠 업데이트
		const sideContent = document.querySelector(".side-content");
		sideContent.innerHTML = `
        <div class="card">
          <img src="images/blackpink.jpg" alt="BLACKPINK - THE ALBUM">
          <p>BLACKPINK - THE ALBUM<br>2020.10.02. (금) 발매</p>
        </div>
        <div class="card">
          <img src="images/twice.jpg" alt="TWICE - Fancy You">
          <p>TWICE - FANCY YOU<br>2019.04.22.(월) 발매</p>
        </div>
        <div class="card">
          <img src="images/aespa.jpg" alt="aespa - Savage">
          <p>aespa - Savage<br>2021.10.05.(화) 발매</p>
        </div>
      `;
	});
});
//발라드 버튼
document.addEventListener("DOMContentLoaded", function() {
	// 발라드 버튼 클릭 이벤트
	document.getElementById("qkffkem-button").addEventListener("click", function(e) {
		e.preventDefault(); // 기본 링크 동작 방지

		// 메인 콘텐츠 업데이트
		document.getElementById("main-image").src = "images/mcthemax.jpg";
		document.getElementById("main-overlay").innerHTML = `
        <h1>MC THE MAX - PHATOS</h1>
        <p>1월 28일, 2016</p>
        <p>앨범명 [파토스] 는 그리스어로 열정 혹은 비애감 등 깊은 감정을 의미하는 단어로, 
        문학 작품이나 문학적 표현에서 정서적인 호소력을 의미하는 페이소스(pathos) 의 어원이다.</p>
      `;

		// 사이드 콘텐츠 업데이트
		const sideContent = document.querySelector(".side-content");
		sideContent.innerHTML = `
        <div class="card">
          <img src="images/tjdtlrud.jpg" alt="성시경 - 너의 모든 순간">
          <p>성시경 - 너의 모든 순간<br>2014.02.12.(수) 발매</p>
        </div>
        <div class="card">
          <img src="images/shdmf.jpg" alt="노을 - TIME FOR LOVE">
          <p>노을 - TIME FOR LOVE<br>2012.11.06.(금) 발매</p>
        </div>
        <div class="card">
          <img src="images/ditodghk.jpg" alt="박효신 - 야생화">
          <p>박효신 - 야생화<br>2014.03.28.(화) 발매</p>
        </div>
      `;
	});
});
//밴드 버튼
document.addEventListener("DOMContentLoaded", function() {
	// 밴드 버튼 클릭 이벤트
	document.getElementById("band-button").addEventListener("click", function(e) {
		e.preventDefault(); // 기본 링크 동작 방지

		// 메인 콘텐츠 업데이트
		document.getElementById("main-image").src = "images/teambaby.jpg";
		document.getElementById("main-overlay").innerHTML = `
        <h1>검정치마 - TEAMBABY</h1>
      <p>5월 30일, 2017년</p>
      <p>
        이 앨범에서는 사랑, 그리고 보고 싶어지는 그리움을 노래했다. 지금 사랑을 하고 있는 당신과,
        그런 당신의 편에 서 있는 사람을 위한 앨범이다.(조휴일)</p>
      `;

		// 사이드 콘텐츠 업데이트
		const sideContent = document.querySelector(".side-content");
		sideContent.innerHTML = `
        <div class="card">
          <img src="images/realize.jpg" alt="실리카겔 EP-Machine Boy">
          <p>실리카겔 EP-Machine Boy<br>2023.04.25. (화) 발매</p>
        </div>
        <div class="card">
          <img src="images/monkeyhotel.jpg" alt="잔나비 - MONKEY HOTEL">
          <p>잔나비 MONKEY HOTEL<br>2016.08.04. (목) 발매</p>
        </div>
        <div class="card">
          <img src="images/animal.jpg" alt="쏜애플 - 2nd MINI Album(동물)">
          <p>쏜애플<br>2nd MINI Album<br>(동물)<br>2023.08.28. (월) 발매</p>
        </div>
      `;
	});
});
//POPSONG 버튼
document.addEventListener("DOMContentLoaded", function() {
	// POPSONG 버튼 클릭 이벤트
	document.getElementById("pop-button").addEventListener("click", function(e) {
		e.preventDefault(); // 기본 링크 동작 방지

		// 메인 콘텐츠 업데이트
		document.getElementById("main-image").src = "images/qmfnsh.jpg";
		document.getElementById("main-overlay").innerHTML = `
        <h1>BrunoMars - Unorthodox Jukebox</h1>
      <p>12월 17일, 2012년</p>
      <p>
        80년대 음악을 재구성하는데 도가 튼 브루노의 모습이
         이 앨범부터 드러나기 시작했으며 전작보다 높은 평가를 받았고,
         히트곡으론 When I Was Your Man이 있다.</p>
      `;

		// 사이드 콘텐츠 업데이트
		const sideContent = document.querySelector(".side-content");
		sideContent.innerHTML = `
        <div class="card">
          <img src="images/dkfldksk.jpg" alt="">
          <p>Ariana Grande - thank u, next 2019.02.08.(목) 발매</p>
        </div>
        <div class="card">
          <img src="images/ckffl.jpg" alt="Charlie Puth CHARLIE">
          <p>Charlie Puth - CHARLIE<br>2022.10.07.(화) 발매</p>
        </div>
        <div class="card">
          <img src="images/justin.jpg" alt="Justin Bieber 2nd JUSTICE">
          <p>Justin Bieber<br>JUSTICE<br>2021.03.19.(금) 발매</p>
        </div>
      `;
	});
});
//JAZZ 버튼
document.addEventListener("DOMContentLoaded", function() {
	// JAZZ 버튼 클릭 이벤트
	document.getElementById("jazz-button").addEventListener("click", function(e) {
		e.preventDefault(); // 기본 링크 동작 방지

		// 메인 콘텐츠 업데이트
		document.getElementById("main-image").src = "images/jazz.jpg";
		document.getElementById("main-overlay").innerHTML = `
        <h1>Bill Evans - New Jazz Conceptions</h1>
      <p>2월 말, 1957년</p>
      <p>
        빌 에반스의 대표곡 Waltz for Debby의 오리지널 버전이 수록된 앨범. 친형 해리 
        에반스(Harry Evans)의 딸인 조카 데비 에반스(Debby Evans)를 보고 작곡했다고 알려져 있다.</p>
      `;

		// 사이드 콘텐츠 업데이트
		const sideContent = document.querySelector(".side-content");
		sideContent.innerHTML = `
        <div class="card">
          <img src="images/zhfajs.jpg" alt="Ornette Coleman - Change of the Century">
          <p>Ornette Coleman Change of the Century 1960.5 발매</p>
        </div>
        <div class="card">
          <img src="images/ina.jpg" alt="Miles Davis - In a Silent Way">
          <p>Miles Davis In a Silent Way<br>1969.2.18 발매</p>
        </div>
        <div class="card">
          <img src="images/beats.jpg" alt="A Tribe Called Quest - Beats, Rhymes and Life">
          <p>A Tribe Called Quest Beats, Rhymes and Life<br>1996.07.30 발매</p>
        </div>
      `;
	});
});
//드롭다운 메뉴바
document.addEventListener("DOMContentLoaded", function() {
	const searchBar = document.getElementById("search-bar");
	const dropdownMenu = document.getElementById("dropdown-menu");

	// 검색 바 클릭 시 드롭다운 메뉴 표시
	searchBar.addEventListener("focus", function() {
		dropdownMenu.style.display = "block";
	});

	// 검색 바 외부 클릭 시 드롭다운 메뉴 숨기기
	document.addEventListener("click", function(event) {
		if (!searchBar.contains(event.target) && !dropdownMenu.contains(event.target)) {
			dropdownMenu.style.display = "none";
		}
	});

	// 드롭다운 메뉴 항목 클릭 시 동작
	dropdownMenu.addEventListener("click", function(event) {
		if (event.target.tagName === "LI") {
			searchBar.value = event.target.textContent;
			dropdownMenu.style.display = "none";
		}
	});
});
//팝업바  
document.addEventListener("DOMContentLoaded", function() {
	popupBar.classList.toggle("hidden"); // 숨기거나 보이기
	popupItems.forEach((item) => {
		item.addEventListener("click", function() {
			alert(`${this.textContent}을(를) 클릭했습니다.`);
		});
	});
});
//로그인 이메일 폼
document.querySelector(".signup-form").addEventListener("submit", function(e) {
	e.preventDefault(); 

	const emailLocal = document.getElementById("email").value;
	const emailDomain = document.getElementById("email-domain").value;
	const fullEmail = `${emailLocal}${emailDomain}`;

	console.log("Full email address:", fullEmail);
});