import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    favicons: Array
  }

  connect(){
  }

  favicon() {
    const currentFavicon = document.getElementById("favicon");

    // This is get a random value from 1 to 4 (because we are using 4 favicons)
    const randomValue = Math.floor(Math.random() * 4)

    currentFavicon.setAttribute("href", this.faviconsValue[randomValue]);
  }
}
