import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customUpperCase"
})
export class CustomUpperCase implements PipeTransform {
  transform(value: string, ...args: any[]) {
    let str = value.substring(0, value.length - 1);
    return str.toUpperCase();
  }
}
