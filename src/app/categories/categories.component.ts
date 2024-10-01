import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
// import { Categories } from '../categories.model';
import { Categories } from '../categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories:Categories[]=[];
  selectedCategory: Categories | undefined;  // For displaying selected category details


constructor(private categoriesservice:CategoriesService){}

ngOnInit(): void {
  this.categoriesservice.getCategories().subscribe((data:Categories[])=>{
    this.categories=data;
    console.log('from service',this.categories)

  })
}

onSelectedCategory(event:Event): void{
  const selectedCategoryName = (event.target as HTMLSelectElement).value;

  this.selectedCategory= this.categories.find(category=> category.name  === selectedCategoryName); 
  // console.log(this.selectedCategory); // Check if the selected category is found and has the `name` property

}

}
