import { Component } from '@angular/core';
import { NotesPanelComponent } from "../../core/components/notes-panel/notes-panel.component";
import { CalendarPanelComponent } from "../../core/components/calendar-panel/calendar-panel.component";

@Component({
  selector: 'app-planner',
  imports: [NotesPanelComponent, CalendarPanelComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss'
})
export class PlannerComponent {

}
