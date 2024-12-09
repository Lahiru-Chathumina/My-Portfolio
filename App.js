var md = window.markdownit();

function send() {
    let input = document.getElementById("Stype").value; 
    console.log(input);
  
    document.getElementById("chtbox").innerHTML += `
      <div class="Chatme">
  <div class="d-flex justify-content-between"></div>
  <div class="d-flex flex-row justify-content-end mb-4 pt-1">
    <div>
      <p class="small p-2 me-3 mb-3 text-white rounded-3 bg-warning" style="max-width: 70%; word-wrap: break-word;">
        ${input}
      </p>
    </div>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
      alt="avatar 1" class="rounded-circle" style="width: 45px; height: 45px; object-fit: cover;">
  </div>
</div>

    `;
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: input,
            },
          ],
        },
      ],
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDSyl2uENTV_3oR3OD68iuSKGvIH5hK1Kc",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
  
        document.getElementById("chtbox").innerHTML += `
          <div id="AiChat">
            <div class="d-flex justify-content-between">
              <p class="small mb-1">Chat With AI</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <img src="https://st2.depositphotos.com/39254242/50877/i/450/depositphotos_508776408-stock-photo-blue-pink-pentagons-blue-background.jpg"
                class="rounded-circle" alt="Cinque Terre" style="width: 45px; height: 100%;">
              <div>
                <p class="">${md.render(result.candidates[0].content.parts[0].text)}</p>
              </div>
            </div>
          </div>
        `;
      })
      .catch((error) => console.error( error));
    }
  
  
  
  
