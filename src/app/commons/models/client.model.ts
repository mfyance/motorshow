export class Client {

  public id: number;
  public imagePrincipal: string;
  public imageSecondary: string;
  public gif: string;
  public video: string;
  public logo: string;

  public constructor();
  public constructor(stand: IStand);
  public constructor(stand?: IStand) {

    if (stand) {

      this.id = stand.id;
      this.imagePrincipal = stand.imagePrincipal;
      this.imageSecondary = stand.imageSecondary;
      this.gif = stand.gif;
      this.video = stand.video;
      this.logo = stand.logo;
    }
  }
}

export interface IStand {
  id: number;
  imagePrincipal: string;
  imageSecondary: string;
  gif: string;
  video: string;
  logo: string;
}