
export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';

export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}

export function calcularValor(
  config: ContadorConfig,
  direccion: Direccion
): number {
  if (direccion === 'incrementar') {
    return Math.min(config.valor + config.paso, config.maximo);
  }

  return Math.max(config.valor - config.paso, config.minimo);
}

export function estadoUI(
  valor: number,
  config: ContadorConfig
): EstadoUI {
  if (valor === config.minimo) {
    return 'MINIMO';
  }

  if (valor === config.maximo) {
    return 'MAXIMO';
  }

  return 'IDLE';
}