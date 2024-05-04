axios
  .get(
    "https://script.google.com/macros/s/AKfycbyTcA4WlJqsYzjU4GlOHqyIGdQ3lxLrgdmwQu_E6br0ffRSk-WPwygz6TngmB1dd7fS/exec"
  )
  .then((response) => {
    let data = response.data;

    let navbarTarget = document.getElementById("navbar");
    let packCardTarget = document.getElementById("packCard");

    let i = 0;
    for (const [packName, price, coverDetail, coverImg, detail] of data) {
      if (i>0 && (price !== "5,900" && price !== "7,900" && price !=="25,900")) {
        navbarTarget.innerHTML += `
                            <li><a class="hover:font-medium hover:bg-[#e3c1b4bf]">แพ็คเกจ${packName} ${price} บาท</a></li>
                            `;
      } else if (i>0) {
        navbarTarget.innerHTML += `
                            <li><a class="hover:font-medium hover:bg-[#e3c1b4bf]">แพ็คเกจ${packName} ${price} บาท <i
                            class="fa-regular fa-thumbs-up"></i></a></li>
                            `;
      }
      i += 1;
    }
  })
  .catch((err) => {
    alert("Error", err);
  });
