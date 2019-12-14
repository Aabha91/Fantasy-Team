import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light static-top header"
    >
      <div class="container">
        <a class="navbar-brand">ILM Code Audition</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home"
                >Home
                <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor() {}
}
