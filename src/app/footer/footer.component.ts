import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="fixed-bottom footer">
      <span><small>ILM Code Audition Project - by Aabha Choudhary</small></span>
    </footer>
  `,
  styleUrls: ["footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
