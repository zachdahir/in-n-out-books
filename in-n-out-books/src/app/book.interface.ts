/**
 * Title: 5.4
 * Author: Zachary Dahir
 * Date: 8-06-20
 * Description: book interface
 */


//IBook Interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: string;
  authors: Array<string>;
}
