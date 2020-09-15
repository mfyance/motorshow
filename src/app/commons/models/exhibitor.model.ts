export class Exhibitor {

  public id: number;
  public name: string;
  public email: string;
  public theme: string;
  public phones: Array<string>;

  public constructor();
  public constructor(exhibitor: IExhibitor);
  public constructor(exhibitor?: IExhibitor) {

    if (exhibitor) {

      this.id = exhibitor.id;
      this.name = exhibitor.name;
      this.email = exhibitor.email;
      this.theme = exhibitor.theme;
      this.phones = exhibitor.phones;
    }
  }
}

export interface IExhibitor {
  id: number;
  name: string;
  email: string;
  theme: string;
  phones: Array<string>;
}