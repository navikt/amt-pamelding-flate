import { DeltakerStatusAarsakType } from 'deltaker-flate-model'
import { EndreDeltakelseType } from '../api/data/endre-deltakelse-request.ts'
import { PameldingResponse } from '../api/data/pamelding.ts'

export const getDeltakerNavn = (pamelding: PameldingResponse) => {
  return `${pamelding.fornavn} ${pamelding.mellomnavn ? pamelding.mellomnavn + ' ' : ''}${pamelding.etternavn}`
}

export const getDeltakerStatusAarsakTypeText = (
  type: DeltakerStatusAarsakType
) => {
  switch (type) {
    case DeltakerStatusAarsakType.ANNET:
      return 'Annet - fyll ut'
    case DeltakerStatusAarsakType.FATT_JOBB:
      return 'Fått jobb'
    case DeltakerStatusAarsakType.IKKE_MOTT:
      return 'Møter ikke opp'
    case DeltakerStatusAarsakType.SYK:
      return 'Syk'
    case DeltakerStatusAarsakType.TRENGER_ANNEN_STOTTE:
      return 'Trenger annen hjelp og støtte'

    // TODO skissene viser Feilregistrert i tillegg
  }
}

export const getEndreDeltakelseTypeText = (type: EndreDeltakelseType) => {
  switch (type) {
    case EndreDeltakelseType.IKKE_AKTUELL:
      return 'Ikke aktuell'
    case EndreDeltakelseType.AVSLUTT_DELTAKELSE:
      return 'Avslutt deltakelse'
    case EndreDeltakelseType.ENDRE_BAKGRUNNSINFO:
      return 'Endre bakgrunnsinfo'
    case EndreDeltakelseType.ENDRE_INNHOLD:
      return 'Endre innhold'
    case EndreDeltakelseType.ENDRE_OPPSTARTSDATO:
      return 'Endre oppstartsdato'
    case EndreDeltakelseType.ENDRE_SLUTTARSAK:
      return 'Endre sluttårsak'
    case EndreDeltakelseType.ENDRE_SLUTTDATO:
      return 'Endre sluttdato'
    case EndreDeltakelseType.FORLENG_DELTAKELSE:
      return 'Forleng deltakelse'
    case EndreDeltakelseType.ENDRE_DELTAKELSESMENGDE:
      return 'Endre deltakelsesmengde'
  }
}
