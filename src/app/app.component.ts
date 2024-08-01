import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocComponent } from './Components/doc/doc.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TextEditor';
}
