import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('/products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number): any {
        const id = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id };
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }
}