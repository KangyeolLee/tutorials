import './styles';
import Component from '@/Core/Component';
import { asyncSetState, html } from '@/utils/helper';
import { $router } from '@/Core/Router';
import { svgIcons } from '@/assets/svgIcons';
import { MainModelType, Props, TodayModelType } from '@/utils/types';
import DateModel from '@/Model/DateModel';
import { DateState } from '@/utils/types';
import MainModel from '@/Model/MainModel';

export default class Header extends Component<DateState, Props> {
  model!: TodayModelType;
  mainModel!: MainModelType;

  setup() {
    this.classIDF = 'Header';
    // main 모델(history) 구독
    this.mainModel = MainModel;
    this.mainModel.subscribe(this.mainModel.key, this);

    this.model = DateModel;
    this.model.subscribe(this.model.key, this);
    this.$state = {
      today: this.model.today,
      historyCards: this.mainModel.historyCards,
    };
  }

  template() {
    const { year, month } = this.$state!.today;

    return html`
      <div class="header-wrapper container">
        <span class="header-title">우아한 가계부</span>
        <div class="switch">
          <div class="switch btn" id="btn-prev-month">${svgIcons.leftBtn}</div>
          <div class="switch-text">
            <div class="switch-text month">${month}월</div>
            <div class="switch-text year">${year}</div>
          </div>
          <div class="switch btn" id="btn-next-month">${svgIcons.rightBtn}</div>
        </div>
        <ul class="menu">
          <li class="menu-list" id="menu-main">${svgIcons.fileText}</li>
          <li class="menu-list" id="menu-calendar">${svgIcons.calendar}</li>
          <li class="menu-list" id="menu-chart">${svgIcons.chart}</li>
          <li class="menu-list" id="menu-user">${svgIcons.user}</li>
        </ul>
      </div>
    `;
  }

  mounted() {
    this.changeMenu();
  }

  handleClickPrevBtn() {
    asyncSetState(
      this.model.getPrevDate(),
      this.mainModel.getHistoryCard(this.model.today)
    );
  }

  handleClickNextBtn() {
    asyncSetState(
      this.model.getNextData(),
      this.mainModel.getHistoryCard(this.model.today)
    );
  }

  setEvent() {
    this.addEvent(
      'click',
      '#btn-prev-month',
      this.handleClickPrevBtn.bind(this)
    );
    this.addEvent(
      'click',
      '#btn-next-month',
      this.handleClickNextBtn.bind(this)
    );
    this.addEvent('click', '#menu-main', () => {
      $router.push('/main');
      this.changeMenu();
    });
    this.addEvent('click', '#menu-calendar', () => {
      $router.push('/calendar');
      this.changeMenu();
    });
    this.addEvent('click', '#menu-chart', () => {
      $router.push('/charts');
      this.changeMenu();
    });
    this.addEvent('click', '#menu-user', () => {
      $router.push('/user');
      this.changeMenu();
    });
  }

  removeEvent() {}
  resetEvent() {}

  changeMenu() {
    const path = history.state.path as string;
    this.$target
      .querySelectorAll('li.menu-list')
      .forEach((elem: Element) => elem.removeAttribute('active'));
    switch (path) {
      case '/main':
        this.$target.querySelector('li#menu-main')?.setAttribute('active', '');
        break;
      case '/calendar':
        this.$target
          .querySelector('li#menu-calendar')
          ?.setAttribute('active', '');
        break;
      case '/charts':
        this.$target.querySelector('li#menu-chart')?.setAttribute('active', '');
        break;
      case '/user':
        this.$target.querySelector('li#menu-user')?.setAttribute('active', '');
        break;
    }
  }
}
