import { EndreDeltakelseType } from '../api/data/endre-deltakelse-request.ts'
import { DeltakerStatusAarsakType, DeltakerStatusType, Tiltakstype } from '../api/data/pamelding.ts'

export const getTiltakstypeDisplayText = (type: Tiltakstype): string => {
  switch (type) {
    case Tiltakstype.ARBFORB:
      return 'Arbeidsforberedende trening'
    case Tiltakstype.ARBRRHDAG:
      return 'Arbeidsrettet rehabilitering'
    case Tiltakstype.AVKLARAG:
      return 'Avklaring'
    case Tiltakstype.INDOPPFAG:
      return 'Oppfølging'
    case Tiltakstype.DIGIOPPARB:
      return 'Digitalt oppfølgingstiltak'
    case Tiltakstype.GRUFAGYRKE:
      return 'Fag- og yrkesopplæring'
    case Tiltakstype.GRUPPEAMO:
      return 'Arbeidsmarkedsopplæring'
    case Tiltakstype.JOBBK:
      return 'Jobbklubb'
    case Tiltakstype.VASV:
      return 'Varig tilrettelagt arbeid'
  }
}

export const getDeltakerStatusDisplayText = (type: DeltakerStatusType): string => {
  switch (type) {
    case DeltakerStatusType.KLADD:
      return 'Kladd'
    case DeltakerStatusType.UTKAST_TIL_PAMELDING:
      return 'Utkast til påmelding'
    case DeltakerStatusType.VENTER_PA_OPPSTART:
      return 'Venter på oppstart'
    case DeltakerStatusType.DELTAR:
      return 'Deltar'
    case DeltakerStatusType.HAR_SLUTTET:
      return 'Har sluttet'
    case DeltakerStatusType.IKKE_AKTUELL:
      return 'Ikke aktuell'
    case DeltakerStatusType.FEILREGISTRERT:
      return 'Feilregistrert'
    case DeltakerStatusType.SOKT_INN:
      return 'Søkt inn'
    case DeltakerStatusType.VURDERES:
      return 'Vurderes'
    case DeltakerStatusType.VENTELISTE:
      return 'Venteliste'
    case DeltakerStatusType.AVBRUTT:
      return 'Avbrutt'
    case DeltakerStatusType.FULLFORT:
      return 'Fullført'
    case DeltakerStatusType.PABEGYNT_REGISTRERING:
      return 'Påbegynt Registrering'
  }
}

export const getDeltakerStatusAarsakTypeText = (type: DeltakerStatusAarsakType) => {
  switch (type) {
    case DeltakerStatusAarsakType.ANNET:
      return 'Annet - fyll ut'
    case DeltakerStatusAarsakType.FATT_JOBB:
      return 'Fått jobb'
    case DeltakerStatusAarsakType.UTDANNING:
      return 'Utdanning'
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
  }
}
