const cards = document.querySelector(".cards");
const allSpans = document.querySelectorAll(".category span");
const category = document.querySelector(".category");

const baseUrl = "https://newsapi.org/v2";
const apiKey = "&apiKey=121b3e4736ff454ab140b52a74edda2f";
const backUpImage =
  "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3Rqc3xlbnwwfHwwfHx8MA%3D%3D";

async function getNews(url) {
  try {
    const response = await fetch(baseUrl + url + apiKey);
    const json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

function getAllNews(url) {
  getNews(url).then((data) => {
    data.articles.forEach((item) => {
      cards.innerHTML += `<div class="card">
                      <div class="image">
                        <img
                          src=${item.urlToImage ? item.urlToImage : backUpImage}
                          alt="default News Image"
                        />
                      </div>
                      <div class="information">
                        <div>
                          <p class="title">
                           ${item.title}
                          </p>
                          <p class="description">
                            ${item.description}
                          </p>
                          <p class="time">
                            <span>${
                              item.publishedAt.replace("Z", " ").split("T")[1]
                            }</span>
                            <span>${
                              item.publishedAt.replace("Z", " ").split("T")[0]
                            }</span>
                          </p>
                        </div>
      
                        <div class="other">
                          <span class="source">${item.source.name}</span>
                          <a href=${item.url} class="url" target="_blank"
                            >Read Article <i class="bi bi-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>`;
    });
  });
}

category.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    cards.innerHTML = "";
    getAllNews(event.target.dataset.url);
    allSpans.forEach((span) => span.classList.remove("active"));
    event.target.classList.add("active");
  }
});

getAllNews("/everything?q=us&from=2025-01-20&to=2025-01-20&sortBy=popularity");
