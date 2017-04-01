export class config {
  public static googleMapsKey: string = 'AIzaSyAegsJu1O7ObZq_l1gPRMFnjMOR0kJuG-8';
  public static latitude: number = 60.01940939295838;
  public static longitude: number = 30.313335813274534;
  public static zoom: number = 5;
  public static leaps: number = 3;
  public static steps: number = 10;
  public static maxSteps: number = 10;

  public static os: string = 'windows';
  public static workers: number = 8;
  public static accountColumns: string = 'username, password';

  public static windowsTemplates: ICommandTemplate = {
    setup: 'taskkill /IM python.exe /F',
    server: 'Start "Server" /d {rocketmap-directory} /MIN python.exe runserver.py -os -l "{location}"',
    worker: 'Start "Worker{index}" /d {rocketmap-directory} /MIN python.exe runserver.py -ns -l "{location}" -st {steps} {auth-template}',
    auth: '-u {username} -p "{password}"',
    delay: 'ping 127.0.0.1 -n 6 > null',
    filename: 'launch.bat'
  };

  public static linuxTemplates: ICommandTemplate = {
    setup: '#!/usr/bin/env bash',
    server: 'nohup python runserver.py -os -l \'{location}\' &',
    worker: 'nohup python runserver.py -ns -l \'{location}\' -st {steps} {auth-template} &',
    auth: '-u {username} -p \'{password}\'',
    delay: 'sleep 0.5;',
    filename: 'launch.sh'
  };
};

export interface ICommandTemplate {
  setup: string;
  server: string;
  worker: string;
  auth: string;
  delay: string;
  filename: string;
}
