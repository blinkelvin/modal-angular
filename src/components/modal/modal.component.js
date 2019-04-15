import modalHtml from './modal.html';
import isValidCreditCard from '../../utils/validation.js'

/* @ngInject */
let modalComponent = {
  template: modalHtml,
  controllerAs: 'modal',
  controller: function (modalService, $http) {
    this.optionIndex = 0
    this.stepIndex = 0
    this.creditCard = ''
    this.showErrorMessages = false

    modalService.getData()
      .then((data) => this.plans = data.plans)

    this.changeIndex = (index) => {
      this.optionIndex = index
    }

    this.nextStep = () => {
      this.stepIndex++
    }

    this.submitPayment = () => {
      if (isValidCreditCard(this.creditCard)) {
        this.nextStep()
      } else {
        this.showErrorMessages = true
      }
    }

    this.changeCreditCard = () => {
      this.showErrorMessages = false
    }
  }
}

export default modalComponent;
