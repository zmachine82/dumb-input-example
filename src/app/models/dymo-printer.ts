import { PrinterInterface } from './printer-interface';
export class DymoPrinter implements PrinterInterface {
    name: string;

    
    print(stuffToPrint: string) {
        throw new Error('Method not implemented.');
    }
    
}