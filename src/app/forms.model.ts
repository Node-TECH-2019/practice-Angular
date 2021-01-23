export class Forms {
  constructor(
    public your_name: string,
    public furigana: string,
    public email: string,
    public email_check: string,
    public contact_type: string,
    public subject: string,
    public comment: string,
    public companyname?: string,
    public tel?: string
  ){}
}

export const contact_types: string[] = ['営業代行','ホームページ制作','オーダースーツ制作','Youtube動画制作','スマホ教室'];

export const formsContent: Forms[] = [
  {
    your_name: '佐藤考太',
    furigana: 'さとうこうた',
    email: 'info@nodetech.sub.jp',
    email_check: 'info@nodetech.sub.jp',
    contact_type: '営業代行',
    subject: 'subject',
    comment: 'こんにちは！\n私はさとぅんコタティス・G・チョムニダです。',
    companyname: '合同会社NodeTECH.',
    tel: '080-6608-1575',
  },
  {
    your_name: '森井將裕',
    furigana: 'もりいまさひろ',
    email: 'front@nodetech.sub.jp',
    email_check: 'front@nodetech.sub.jp',
    contact_type: 'ホームページ制作',
    subject: '件名',
    comment: 'こんにちは！\n私はもりちゃんです。',
    companyname: '合同会社NodeTECH.サイト制作部門',
    tel: '070-8307-4361',
  },
  {
    your_name: '山内廉',
    furigana: 'やまうちれん',
    email: 'yamaren@nodetech.sub.jp',
    email_check: 'yamaren@nodetech.sub.jp',
    contact_type: '営業代行',
    subject: '件名!!!',
    comment: 'こんにちは！\n私はやまれんです。',
    companyname: '合同会社NodeTECH.動画制作部門',
    tel: '080-3278-9194',
  },
  {
    your_name: '江幡侑弥',
    furigana: 'えばたゆうや',
    email: 'yuya@nodetech.sub.jp',
    email_check: 'yuya@nodetech.sub.jp',
    contact_type: 'オーダースーツ制作',
    subject: '件名????',
    comment: 'こんにちは！\n私はゆうやです。',
    companyname: '合同会社NodeTECH.システム開発部門',
    tel: '090-3690-9445',
  }
]
