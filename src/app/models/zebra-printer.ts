import { PrinterInterface } from './printer-interface';
export class ZebraPrinter implements PrinterInterface {
    name: string;
    
    
    print(stuffToPrint: string) {
        throw new Error('Method not implemented.');
    }

}