import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  showClass = { popup: 'animate__animated animate__zoomIn animate__faster' };
  hideClass = { popup: 'animate__animated animate__zoomOut animate__faster' };
  focusAnimation = () => {
    const popup = Swal.getPopup();
    popup.classList.remove('animate__zoomIn');
    setTimeout(() => {
      popup.classList.add('animate__pulse');
    });
    setTimeout(() => {
      popup.classList.remove('animate__pulse');
    }, 500);
    return false;
  };

  constructor() { }

  /**
   * Fires warning swal
   * @param msg Message to display
   * @returns Promise<SweetAlertResult<any>>
   */
  promptSwal(msg?: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: 'Let op!',
      text: msg,
      icon: 'warning',
      showClass: this.showClass,
      hideClass: this.hideClass,
      showCancelButton: true,
      confirmButtonText: 'Oke',
      cancelButtonText: 'Annuleer',
      allowOutsideClick: this.focusAnimation,
    });
  }

  /**
   * Fires succes sweet alert
   * @param msg Message to display
   */
  successSwal(msg?: string): void {
    Swal.fire({
      title: 'Gelukt!',
      text: msg,
      icon: 'success',
      showClass: this.showClass,
      hideClass: this.hideClass,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /**
   * Fires error sweet alert
   * @param msg Message to display
   */
  errorSwal(msg?: string): void {
    Swal.fire({
      title: 'Mislukt!',
      text: msg,
      icon: 'error',
      showClass: this.showClass,
      hideClass: this.hideClass,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /**
   * Fires error sweet alert
   * @param msg Message to display
   */
  warningSwal(msg?: string): void {
    Swal.fire({
      title: 'Let op!',
      text: msg,
      icon: 'error',
      showClass: this.showClass,
      hideClass: this.hideClass,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /**
   * Fires cancel swal
   * @param msg Message to display
   */
  cancelSwal(msg?: string): void {
    Swal.fire({
      title: 'Geannuleerd!',
      text: msg,
      icon: 'error',
      showClass: this.showClass,
      hideClass: this.hideClass,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /**
   * Fires loading sweet alert
   * @param msg Message to display
   */
  loadingSwal(msg?: string): void {
    Swal.fire({
      title: msg,
      html: '<svg class="material-spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>',
      showClass: this.showClass,
      hideClass: this.hideClass,
      allowEscapeKey: false,
      showConfirmButton: false,
      allowOutsideClick: this.focusAnimation,
    });
  }
}
