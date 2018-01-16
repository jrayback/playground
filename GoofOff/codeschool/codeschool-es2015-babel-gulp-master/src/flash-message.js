/**
 * Created by Bruno Bertomeu on 27/12/2016.
 */
class FlashMessage {
  constructor(message) {
    this.message = message;
  }

  display() {
    alert(this.message);
  }
}

export default FlashMessage;