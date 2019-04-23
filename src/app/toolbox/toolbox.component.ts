import { Component, OnInit } from '@angular/core';
import { ToolSelectorService } from '../tool-selector.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {


  constructor(private toolSelector: ToolSelectorService) {}

  ngOnInit() {
    
  }

  choose(tool: string){
    this.toolSelector.setTool(tool);
  }

}
