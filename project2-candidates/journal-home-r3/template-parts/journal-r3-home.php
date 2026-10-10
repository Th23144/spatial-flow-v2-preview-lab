<?php
/** Journal Home R3 dynamic data and menu ownership. */
if ( ! defined( 'ABSPATH' ) ) { exit; }
$sf_r3_archive_url = spatial_flow_journal_all_articles_url();
$sf_r3_toc_posts = spatial_flow_journal_merge_manual_post_slots(
 array( 0=>'sf_journal_home_featured_post_1',1=>'sf_journal_home_featured_post_2',2=>'sf_journal_home_featured_post_3',3=>'sf_journal_home_center_large_post',4=>'sf_journal_home_secondary_large_post',5=>'sf_journal_home_bottom_post_1',6=>'sf_journal_home_bottom_post_2',7=>'sf_journal_home_bottom_post_3' ),
 spatial_flow_journal_get_posts( 12, '', array(), true ), 8
);
$sf_r3_featured_posts = array_slice( $sf_r3_toc_posts, 0, 3 );
$sf_r3_question_posts = spatial_flow_journal_merge_manual_post_slots(
 array( 0=>'sf_journal_home_bottom_post_1',1=>'sf_journal_home_bottom_post_2',2=>'sf_journal_home_bottom_post_3',3=>'sf_journal_home_bottom_post_4' ),
 spatial_flow_journal_get_posts( 12, '', wp_list_pluck( $sf_r3_featured_posts, 'ID' ), false ), 4
);
$sf_r3_categories = spatial_flow_journal_get_category_tiles( 4 );
$sf_r3_space_term = spatial_flow_journal_selected_category_term( 'sf_journal_r3_reading_space_category' );
$sf_r3_objects_term = spatial_flow_journal_selected_category_term( 'sf_journal_r3_reading_objects_category' );
$sf_r3_space_url = $sf_r3_space_term ? get_category_link( $sf_r3_space_term ) : $sf_r3_archive_url;
$sf_r3_objects_url = $sf_r3_objects_term ? get_category_link( $sf_r3_objects_term ) : $sf_r3_archive_url;
$sf_r3_nav_items = array(
 array('home',home_url('/#top'),'Journal',true),
 array('issues',home_url('/#articles'),'Featured',true),
 array('articles',$sf_r3_archive_url,'Articles',true),
 array('topics',home_url('/#archive'),'Topics',true)
);
if ( has_nav_menu( 'sf_journal_r3_primary' ) ) {
 $locations = get_nav_menu_locations();
 $items = isset( $locations['sf_journal_r3_primary'] ) ? wp_get_nav_menu_items( $locations['sf_journal_r3_primary'] ) : array();
 if ( is_array( $items ) && $items ) {
  $sf_r3_nav_items = array();
  foreach ( array_slice( $items, 0, 6 ) as $i=>$item ) {
   $sf_r3_nav_items[] = array( 'custom-'.$i, esc_url_raw( $item->url ), wp_strip_all_tags( $item->title ), true );
  }
 }
}
$sf_r3_footer_defaults = array(
 'read'=>array('Featured writing'=>home_url('/#issues'),'Latest stories'=>$sf_r3_archive_url,'Reading paths'=>home_url('/#archive'),'Guides'=>home_url('/guides/')),
 'explore'=>array('Journal categories'=>home_url('/categories/'),'All articles'=>$sf_r3_archive_url,'About this Journal'=>home_url('/about-this-journal/')),
 'elsewhere'=>array('Spatial Flow Shop'=>spatial_flow_shop_url(),'Services'=>spatial_flow_main_site_url('/services/'),'Contact'=>spatial_flow_main_site_url('/contact-us/'),'FAQ / Help'=>spatial_flow_main_site_url('/faq/'))
);
$sf_r3_footer_locations = array('read'=>'sf_journal_r3_footer_read','explore'=>'sf_journal_r3_footer_explore','elsewhere'=>'sf_journal_r3_footer_elsewhere');
$sf_r3_footer_menus = array();
foreach ( $sf_r3_footer_locations as $key=>$location ) {
 $markup = has_nav_menu( $location ) ? wp_nav_menu( array('theme_location'=>$location,'container'=>false,'echo'=>false,'fallback_cb'=>false,'depth'=>1,'items_wrap'=>'%3$s') ) : '';
 if ( ! $markup ) {
  $markup = '';
  foreach ( $sf_r3_footer_defaults[ $key ] as $label=>$url ) {
   $markup .= '<li><a href="'.esc_url( $url ).'">'.esc_html( $label ).'</a></li>';
  }
 }
 $sf_r3_footer_menus[ $key ] = $markup;
}
?>
<main id="sf-journal-main" class="sf-r3-home" tabindex="-1">
<section class="cover">
  <ink-east-public-nav mode="cover" active="home"></ink-east-public-nav>
<script>
(() => {
  const items = <?php echo wp_json_encode( $sf_r3_nav_items, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT ); ?>;
  class InkEastPublicNav extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const mode = this.getAttribute('mode') === 'full' ? 'full' : 'cover';
      const active = this.getAttribute('active') || '';
      const root = this.attachShadow({ mode: 'open' });
      const links = items.map(([key, href, label, live]) => {
        const current = active === key;
        if (!live) return `<span class="nav-item placeholder" data-placeholder="true">${label}</span>`;
        let pointsToThisPage = false;
        if (current) {
          try {
            const destination = new URL(href, location.href);
            pointsToThisPage =
              destination.origin === location.origin &&
              destination.pathname === location.pathname &&
              destination.search === location.search;
          } catch (_) { pointsToThisPage = false; }
        }
        return `<a class="nav-item${current ? ' active' : ''}" href="${href}"${pointsToThisPage ? ' aria-current="page"' : ''}>${label}</a>`;
      }).join('');

      root.innerHTML = `
        <style>
          :host {
            all: initial;
            --paper: #f4ede0;
            --ink: #1a1611;
            --ink-soft: #4a4036;
            --ink-faint: #8a7f70;
            --seal: #a02d23;
            --rule: rgba(26,22,17,.28);
            --rule-soft: rgba(26,22,17,.12);
            --serif-en: "EB Garamond","Noto Serif SC",Georgia,serif;
            --serif-cn: "Noto Serif SC","EB Garamond",serif;
            --mono: "JetBrains Mono",ui-monospace,monospace;
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            color: var(--ink-soft);
            font-family: var(--mono);
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: .18em;
            text-transform: uppercase;
            font-feature-settings: normal;
            font-kerning: normal;
            font-variant: normal;
            font-synthesis: none;
            text-rendering: geometricPrecision;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }
          *, *::before, *::after { box-sizing: border-box; }
          a { color: inherit; text-decoration: none; }
          .nav-item { white-space: nowrap; }
          a.nav-item { transition: color .2s, border-color .2s; }
          a.nav-item:hover { color: var(--seal); }
          .placeholder { color: var(--ink-faint); cursor: default; }

          .cover-nav {
            width: 100%;
            display: grid;
            grid-template-columns: minmax(0,1fr) auto minmax(0,1fr);
            align-items: center;
            padding: 0 0 24px;
            border-bottom: 1px solid var(--rule);
            position: relative;
            z-index: 2;
            font-family: var(--mono);
            font-size: 10px;
            line-height: 24px;
            letter-spacing: .18em;
            text-transform: uppercase;
            color: var(--ink-soft);
          }
          .cover-nav .left { min-width: 0; display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
          .cover-nav .center {
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--serif-cn);
            font-size: 13px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: .5em;
            color: var(--ink);
            white-space: nowrap;
          }
          .cover-nav .right { min-width: 0; display: flex; align-items: center; justify-content: flex-end; gap: 28px; }
          .cover-nav .action { white-space: nowrap; }
          .cover-nav .action.placeholder { color: var(--ink-faint); }

          .full-nav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            padding: 26px clamp(28px,5.5vw,100px);
            border-bottom: 1px solid var(--rule-soft);
            position: relative;
            z-index: 5;
            flex-wrap: wrap;
          }
          .brand { display: flex; align-items: baseline; gap: 12px; white-space: nowrap; }
          .brand .mark { font-family: var(--serif-en); font-size: 22px; font-weight: 500; line-height: 28px; letter-spacing: .01em; text-transform: none; color: var(--ink); }
          .brand .mark em { font-style: italic; color: var(--seal); }
          .brand .cn { font-family: var(--serif-cn); font-size: 13px; line-height: 24px; letter-spacing: .3em; text-transform: none; color: var(--ink-faint); }
          .full-nav .links { display: flex; align-items: center; gap: 26px; flex-wrap: wrap; font-family: var(--mono); font-size: 11px; line-height: 24px; letter-spacing: .16em; text-transform: uppercase; }
          .full-nav .nav-item { height: 28px; display: inline-flex; align-items: center; padding: 0 0 4px; border-bottom: 1px solid transparent; color: var(--ink-soft); }
          .full-nav .nav-item.active { color: var(--ink); border-bottom-color: var(--seal); }
          .full-nav .placeholder { color: var(--ink-faint); }

          @media (max-width: 720px) {
            .cover-nav { grid-template-columns: 1fr; text-align: center; gap: 6px; padding-bottom: 14px; }
            .cover-nav .left, .cover-nav .right { justify-content: center; }
            .cover-nav .left { gap: 6px 18px; }
            .cover-nav .right { display: none; }
          }
          @media (max-width: 600px) {
            .full-nav { padding: 16px 18px; gap: 14px; align-items: flex-start; flex-direction: column; }
            .full-nav .links { gap: 6px 18px; font-size: 10px; }
          }
        </style>
        ${mode === 'full' ? `
          <nav class="full-nav" aria-label="Spatial Flow Journal navigation">
            <div class="brand"><span class="mark">Spatial <em>Flow</em> Journal</span><span class="cn">空間手記</span></div>
            <div class="links">${links}</div>
          </nav>` : `
          <nav class="cover-nav" aria-label="Spatial Flow Journal navigation">
            <div class="left">${links}</div>
            <div class="center">空 間 手 記</div>
            <div class="right"><a class="action" href="#archive">Read by topic ↗</a></div>
          </nav>`}
      `;
    }
  }
  if (!customElements.get('ink-east-public-nav')) customElements.define('ink-east-public-nav', InkEastPublicNav);
})();

</script>

<div class="cover-middle">
    <div class="cover-left">
      <div class="issue-stamp"><?php echo esc_html( spatial_flow_journal_copy( 'r3_home_cover_stamp', 'Spatial Flow Journal · Field Notes' ) ); ?></div>
      <h1 class="cover-theme-en"><?php echo wp_kses( spatial_flow_journal_copy( 'r3_home_cover_title', 'Rooms tell stories,<br><i>if we learn</i> to notice.' ), array( 'br'=>array(), 'i'=>array(), 'em'=>array() ) ); ?></h1>
      <div class="cover-theme-cn"><?php echo esc_html( spatial_flow_journal_copy( 'r3_home_cover_cn', '空間有意 · 萬物有聲' ) ); ?></div>
      <p class="cover-brief"><?php echo esc_html( spatial_flow_journal_copy( 'r3_home_cover_intro', 'A journal of rooms, objects and everyday rituals. Notes on the materials we bring home, the spaces we move through, and the quiet details that shape how a place feels.' ) ); ?></p>
      <div class="cover-actions">
        <a href="#issues" class="read-btn">Read the journal <span class="ar">→</span></a>
        <a href="#archive" class="quiet-link">or, browse by theme</a>
      </div>
    </div>

    <div class="cover-right">
      <div class="cover-photo">
        <img src="<?php echo esc_url( get_theme_mod( 'sf_journal_hero_img', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1400&auto=format&fit=crop&q=80' ) ); ?>" alt="Cover illustration for Spatial Flow Journal">
        <div class="photo-overlay"></div>
        <div class="photo-seal">空間</div>
        <div class="photo-caption">
          Journal plate · No. 01<br>
          "An <em>old book</em>, half-read"<br>
          An editorial image study
        </div>
      </div>
      <div class="cover-glyph-strip">
        <div class="glyph-mini">間</div>
        <div class="glyph-info">
          <div class="glyph-label">— a note on space</div>
          <div class="glyph-name"><i>Jiān</i> · 間</div>
          <div class="glyph-meaning">The interval between objects.<br>The room in which life happens.</div>
        </div>
        <div class="vertical-title">物 與 空 間 相 生</div>
      </div>
    </div>
  </div>

  <div class="cover-bottom">
    <div class="left">Spatial Flow · An independent journal</div>
    <div class="center">Rooms · Objects · Everyday rituals</div>
    <div class="right">Selected writing · Objects and spaces</div>
  </div>
</section>

<!-- ========================================
     COLOPHON — wordmark + tagline
     ======================================== -->
<div class="colophon">
  <div class="wordmark">Spatial <em>Flow</em></div>
  <div class="wordmark-cn">空 間 手 記</div>
  <div class="tagline"><em>Thoughtful objects</em> for <em>lived-in spaces</em>.<br>An editorial journal about materials, arrangements,<br>and how small details change the feeling of a room.</div>
  <div class="colophon-meta">
    <span>Made for <b>curious readers</b></span>
    <span>·</span>
    <span>Written about <b>everyday spaces</b></span>
    <span>·</span>
    <span>Published <b>as stories take shape</b></span>
  </div>
</div>

<!-- ========================================
     SECTION 01 — TABLE OF CONTENTS
     ======================================== -->
<section id="issues">
  <div class="section-head">
    <div class="section-num">壹</div>
    <h2>From the journal. <span class="cn">選 文 目 錄</span></h2>
    <a href="#articles" class="section-cta">Featured writing →</a>
  </div>

  <div class="toc-wrap">
    <aside class="toc-aside">
      <div class="label"><?php echo esc_html( spatial_flow_journal_copy( "r3_home_editor_label", "A note from the editors" ) ); ?></div>
      <p class="quote">The objects we keep become part of the atmosphere we live in. Space is not merely what surrounds them.</p>
      <p class="quote-cn">器 物 · 不 只 是 物<br>空 間 · 也 是 生 活</p>
    </aside>

    <div class="toc-list">
<?php foreach ( $sf_r3_toc_posts as $index => $post ) :
  $cats = get_the_category( $post->ID );
  $cn = get_post_meta( $post->ID, '_sf_journal_cn_title', true );
?>
<div class="toc-row"><span class="num">No. <b><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></b></span><div class="title"><a href="<?php echo esc_url( get_permalink( $post ) ); ?>"><?php echo spatial_flow_r3_title_html( $post ); ?></a><?php if ( $cn ) : ?><span class="cn"><?php echo esc_html( $cn ); ?></span><?php endif; ?></div><span class="kind"><?php echo esc_html( $cats ? $cats[0]->name : 'Journal' ); ?></span><span class="page">READ ↗</span></div>
<?php endforeach; ?>

</div>
</div>

<!-- EDITOR'S NOTE — sits inside Section 01 as a continuation -->
  <div class="editor-note"><div class="editor-note-inner">
 <div class="en-stamp">Editor's Note <span class="cn">編 者 按</span></div>
 <div class="en-body">
 <p><?php echo esc_html( spatial_flow_journal_copy( "r3_home_editor_p1", "A journal about space does not begin with an empty floor plan. It begins with what we touch each day — a table, a stone, a window, the light that arrives there each morning." ) ); ?></p>
 <p><?php echo esc_html( spatial_flow_journal_copy( "r3_home_editor_p2", "In these pages we look at materials, arrangements and the habits that turn an ordinary room into a place of our own. We prefer patient observation to easy answers, and useful guidance to perfect-looking interiors." ) ); ?></p>
 <p><?php echo esc_html( spatial_flow_journal_copy( "r3_home_editor_p3", "What follows is a small reading map. Choose the question that stays with you." ) ); ?></p>
 <div class="en-sign"><span><b>The Journal Editors</b></span><span>Spatial Flow Journal · Editorial introduction</span></div>
 </div>
 <aside class="en-aside">An object can change a room.<br>So can the space beside it.<span class="cn">物 之 間<br>乃 見 空 間</span></aside>
</div></div>
</section>

<!-- ========================================
     SECTION 02 — FEATURED ENTRIES
     ======================================== -->
<section id="articles">
  <div class="section-head">
    <div class="section-num">貳</div>
    <h2>Stories & notes. <span class="cn">閱 讀</span></h2>
    <a href="<?php echo esc_url( $sf_r3_archive_url ); ?>" class="section-cta">Browse the shelf →</a>
  </div>

  <div class="entries-grid">
<?php foreach ( $sf_r3_featured_posts as $index => $post ) :
  $cats = get_the_category( $post->ID );
  $cn = get_post_meta( $post->ID, '_sf_journal_cn_title', true );
  $image = spatial_flow_journal_post_image_url( $post->ID, 'large', $index );
?>
  <article class="entry"><a href="<?php echo esc_url( get_permalink( $post ) ); ?>"><div class="frame">
    <div class="photo"><img src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( get_the_title( $post ) ); ?>" loading="lazy"></div>
    <span class="plate"><?php echo esc_html( sprintf( 'No. %02d', $index + 1 ) ); ?> · <?php echo esc_html( $cats ? $cats[0]->name : 'Journal' ); ?></span>
    <span class="ink-cn"><?php echo esc_html( $cn ? mb_substr( $cn, 0, 2 ) : '文' ); ?></span>
   </div><div class="kicker"><span><?php echo esc_html( $cats ? $cats[0]->name : 'Journal' ); ?></span><span class="dot">·</span><span class="time"><?php echo esc_html( spatial_flow_post_reading_time( $post->ID ) ); ?></span></div>
   <h3><?php echo spatial_flow_r3_title_html( $post ); ?><?php if ( $cn ) : ?><span class="cn"><?php echo esc_html( $cn ); ?></span><?php endif; ?></h3>
   <p class="excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt( $post ), 28 ) ); ?></p>
   <div class="author"><?php echo esc_html( get_the_date( '', $post ) ); ?> — <b><?php echo esc_html( get_the_author_meta( 'display_name', $post->post_author ) ); ?></b></div></a>
  </article>
<?php endforeach; ?>

  </div>
</section>

<!-- ========================================
     PULL QUOTE — full bleed
     ======================================== -->
<section class="pull" style="padding-top:160px;">
  <div class="pull-inner">
    <div class="pull-kicker">— from the spatial flow journal —</div>
    <blockquote>
      A room is made <em>not only</em> of objects.<br>
      It is also made of the intervals<br>
      <em>we leave</em> between them.
    </blockquote>
    <div class="cn-quote">有 物 亦 有 間<br>留 白 乃 成 空 間</div>
    <cite>
      <b>— Notes on spaces we inhabit</b>
      Spatial Flow Journal · Editorial Study
    </cite>
  </div>
</section>


<!-- EDITORIAL QUESTIONS — content prototype only; only public WP Posts may occupy these slots in production -->
<section class="letters editorial-questions" id="questions" style="padding:0">
 <div class="questions-intro">
  <div class="section-head letters-head"><div class="section-num">叄</div><h2>Questions of place. <span class="cn">空 間 之 問</span></h2><a href="#articles" class="section-cta">Read the stories →</a></div>
  <p class="questions-deck"><?php echo esc_html( spatial_flow_journal_copy( "r3_home_questions_intro", "The journal often begins with a question about ordinary surroundings. What belongs in a room? How does a material change it? Where does care begin? Each question opens into an essay or guide." ) ); ?></p>
 </div>
 <div class="letters-grid">
<?php foreach ( $sf_r3_question_posts as $index => $post ) :
  $cats = get_the_category( $post->ID );
  $category = $cats ? $cats[0]->name : 'Journal';
?>
 <article class="letter">
  <div class="meta"><span class="num">Question No. <?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span><span><?php echo esc_html( $category ); ?></span></div>
  <div class="question"><?php echo spatial_flow_r3_title_html( $post ); ?></div>
  <div class="signature">— <?php echo esc_html( $category ); ?></div>
  <div class="response-label">From the journal</div><p class="response"><?php echo esc_html( wp_trim_words( get_the_excerpt( $post ), 29 ) ); ?></p>
  <p class="source">Explore the subject — <a href="<?php echo esc_url( get_permalink( $post ) ); ?>"><b>Read the journal ↗</b></a></p>
 </article>
<?php endforeach; ?>
<div class="letter-submit"><div class="cn">問 · 讀</div><h4>Every question is a possible reading path.</h4><p>Explore published writing — these questions link only to public Journal posts.</p><a class="write-link" href="<?php echo esc_url( $sf_r3_archive_url ); ?>">Explore reading paths →</a><div class="fineprint">Public journal writing · Reader correspondence is never automatically published</div></div>

 </div>
</section>


<!-- PUBLIC READING ROOM — no paid tier, user account, VIP library or paywall -->
<section class="reading-room" id="reading">
 <div class="rr-grid">
  <div class="rr-text">
   <div class="label">— The Reading Room —</div>
   <h2>For stories that ask for a <em>slower kind of reading.</em></h2>
   <div class="cn">慢 讀 · 深 讀</div>
   <p><?php echo esc_html( spatial_flow_journal_copy( "r3_home_reading_p1", "Some subjects open slowly. A room is shaped by its layout, the objects it holds, and the habits that return to it every day." ) ); ?></p>
   <p><?php echo esc_html( spatial_flow_journal_copy( "r3_home_reading_p2", "The Reading Room gathers longer essays and guides into two public routes. No membership, gate, or private library — only a place to begin." ) ); ?></p>
   <div class="rr-tiers">
    <a class="rr-tier" href="<?php echo esc_url( $sf_r3_space_url ); ?>">
     <div class="name">First path</div><div class="name-cn">空 間</div><div class="price">Spaces</div>
     <div class="price-period">Arrangements / atmosphere</div>
     <ul><li>Room-focused essays</li><li>Ways of arranging</li><li>Everyday observations</li></ul>
    </a>
    <a class="rr-tier featured" href="<?php echo esc_url( $sf_r3_objects_url ); ?>">
     <div class="name">Second path</div><div class="name-cn">器 物</div><div class="price">Objects</div>
     <div class="price-period">Materials / care / meaning</div>
     <ul><li>Material stories</li><li>Object placement</li><li>Guides worth keeping</li></ul>
    </a>
   </div>
  </div>
  <div class="rr-art">
   <div class="big-cn">讀</div>
   <div class="small"><b>讀 / dú</b><br>To read slowly;<br>to see familiar things again.</div>
   <div class="small right">Reading Room<br>Spatial Flow Journal</div>
   <div class="seal-stamp">空間</div>
  </div>
 </div>
</section>

<!-- ========================================
     SECTION 05 — PUBLIC ARCHIVE / TOPICS
     ======================================== -->
<section class="archive" id="archive">
  <div class="section-head">
    <div class="section-num">伍</div>
    <h2>Reading paths. <span class="cn">分 類 書 架</span></h2>
    <a href="<?php echo esc_url( $sf_r3_archive_url ); ?>" class="section-cta">All articles →</a>
  </div>

  <div class="archive-grid">
<?php foreach ( $sf_r3_categories as $index => $term ) : ?>
 <a class="past-issue" href="<?php echo esc_url( get_category_link( $term ) ); ?>">
  <div class="spine<?php echo $index ? ' forthcoming' : ''; ?>"><div class="spine-top"><span>READING</span><span>JOURNAL</span></div><div class="spine-bottom">
   <div class="issue-num-cn"><?php echo esc_html( array( '壹', '貳', '叄', '肆' )[ $index ] ?? $index + 1 ); ?></div>
   <div class="issue-title-en"><?php echo esc_html( $term->name ); ?></div>
   <div class="issue-title-cn"><?php echo esc_html( get_term_meta( $term->term_id, 'sf_journal_cn_label', true ) ?: $term->name ); ?></div>
  </div></div><div class="meta"><b>Open category</b><span>·</span><span><?php echo esc_html( (int) $term->count ); ?> posts</span><span>·</span><span>Read</span></div>
 </a>
<?php endforeach; ?>

  </div>
</section>


<!-- DISPATCH — WP production already has email + topic intake. This preview submits nothing. -->
<section class="dispatch" id="dispatch">
 <div class="dispatch-inner">
  <div class="label">— Journal Dispatch —</div>
  <h3><?php echo wp_kses( spatial_flow_journal_copy( "r3_home_dispatch_title", "A small note, <em>for what you want to explore next.</em>" ), array( "em"=>array() ) ); ?></h3>
  <div class="cn">留 一 個 題 目 · 寫 一 封 信</div>
  <p><?php echo esc_html( spatial_flow_journal_copy( "r3_home_dispatch_intro", "Have a question about a room, a material, or an everyday object? Leave a topic for the editors. The Journal Dispatch collects ideas that may guide future writing." ) ); ?></p>
  <form class="sf-journal-form" action="<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>" method="post" data-sf-journal-form
 data-modal-kicker="<?php echo esc_attr( spatial_flow_journal_copy( 'dispatch_modal_kicker', 'Journal Dispatch' ) ); ?>"
 data-modal-title="<?php echo esc_attr( spatial_flow_journal_copy( 'dispatch_modal_title', 'Thank you for sharing.' ) ); ?>"
 data-modal-text="<?php echo esc_attr( spatial_flow_journal_copy( 'dispatch_modal_text', 'Thank you for sharing. Your topic helps us understand what readers want to explore next.' ) ); ?>"
 data-modal-button="<?php echo esc_attr( spatial_flow_journal_copy( 'dispatch_modal_button', 'Done' ) ); ?>"
 data-error-title="<?php esc_attr_e( 'Something went wrong.', 'spatial-flow' ); ?>"
 data-error-text="<?php esc_attr_e( 'Please check the fields and try again.', 'spatial-flow' ); ?>"
 data-error-button="<?php esc_attr_e( 'Try again', 'spatial-flow' ); ?>"
 data-submitting-text="<?php esc_attr_e( 'Sending…', 'spatial-flow' ); ?>">
 <input type="hidden" name="action" value="spatial_flow_journal_dispatch_submit">
 <input type="hidden" name="sf_journal_dispatch_nonce" value="<?php echo esc_attr( wp_create_nonce( 'sf_journal_dispatch' ) ); ?>">
 <input type="hidden" name="source_url" value="<?php echo esc_url( home_url( '/' ) ); ?>">
 <div class="sf-journal-hp" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
 <label class="dispatch-sr-only" for="sf-r3-email">Email address</label>
 <input id="sf-r3-email" type="email" name="email" autocomplete="email" placeholder="<?php echo esc_attr( spatial_flow_journal_copy( 'dispatch_email_placeholder', 'your email address' ) ); ?>" required>
 <label class="dispatch-sr-only" for="sf-r3-topic">Topic of interest</label>
 <input id="sf-r3-topic" type="text" name="topic" placeholder="<?php echo esc_attr( spatial_flow_journal_copy( 'dispatch_topic_placeholder', 'a subject on your mind' ) ); ?>" required>
 <button type="submit"><?php echo esc_html( spatial_flow_journal_copy( 'dispatch_button_text', 'Share a topic →' ) ); ?></button>
 <p class="sf-journal-form-status" data-sf-journal-form-status role="status" aria-live="polite"></p>
</form>
  
  
 </div>
</section>

<!-- ========================================
     FOOTER — colophon
     ======================================== -->
</main>
<ink-east-footer></ink-east-footer>
<script>
(() => {
  const sfR3Menus = <?php echo wp_json_encode( $sf_r3_footer_menus, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT ); ?>;
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        all: initial;
        --paper: #f4ede0;
        --paper-light: #faf5e9;
        --ink: #1a1611;
        --ink-soft: #4a4036;
        --ink-faint: #8a7f70;
        --seal: #a02d23;
        --rule: rgba(26, 22, 17, 0.28);
        --serif-en: "EB Garamond", "Noto Serif SC", Georgia, serif;
        --serif-cn: "Noto Serif SC", "EB Garamond", serif;
        --mono: "JetBrains Mono", ui-monospace, monospace;
        display: block;
        width: 100%;
        min-width: 0;
        max-width: none;
        margin: 0;
        padding: 0;
        border: 0;
        background: var(--paper);
        color: var(--ink);
        font-family: var(--serif-en);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.55;
        letter-spacing: normal;
        text-transform: none;
        font-feature-settings: "liga" 1, "kern" 1;
        font-kerning: normal;
        font-variant: normal;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        transform: translateY(var(--footer-snap-y, 0px));
      }

      footer,
      footer * { box-sizing: border-box; }

      a {
        color: inherit;
        text-decoration: none;
      }

      footer {
        width: 100%;
        min-width: 0;
        background: var(--paper);
        color: var(--ink);
        padding: 90px 40px 28px;
        margin: 0;
        text-align: left;
        font-family: var(--serif-en);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.55;
        letter-spacing: normal;
        font-feature-settings: "liga" 1, "kern" 1;
        font-kerning: normal;
        font-variant: normal;
        font-synthesis: none;
      }

      .foot-mark {
        text-align: center;
        padding-bottom: 48px;
        border-bottom: 1px solid var(--ink);
        margin-bottom: 56px;
      }

      .foot-mark .ampers {
        font-family: var(--serif-en);
        font-size: clamp(80px, 12vw, 200px);
        font-style: normal;
        font-weight: 400;
        line-height: 0.85;
        letter-spacing: -0.01em;
        font-feature-settings: "liga" 1, "kern" 1;
        font-kerning: normal;
      }
      .foot-mark .ampers em { font-style: italic; color: var(--seal); }

      .foot-mark .cn {
        display: block;
        font-family: var(--serif-cn);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.5em;
        color: var(--ink-soft);
        margin-top: 18px;
      }

      .foot-mark .sub {
        display: block;
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin-top: 16px;
        font-feature-settings: normal;
        font-variant: normal;
      }

      .foot-cols {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1fr;
        align-items: start;
        gap: 56px;
        padding-bottom: 40px;
        border-bottom: 1px solid var(--rule);
      }

      h5 {
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: var(--seal);
        margin: 0 0 22px;
        padding: 0;
        font-feature-settings: normal;
        font-variant: normal;
      }
      h5 .cn {
        font-family: var(--serif-cn);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        color: var(--ink-faint);
        margin-left: 10px;
        letter-spacing: 0.3em;
      }

      p.mission {
        font-family: var(--serif-en);
        font-style: italic;
        font-size: 17px;
        font-weight: 400;
        line-height: 28.9px;
        letter-spacing: normal;
        color: var(--ink-soft);
        max-width: 380px;
        margin: 0 0 22px;
        padding: 0;
        font-feature-settings: "liga" 1, "kern" 1;
        font-kerning: normal;
        font-variant: normal;
      }

      .also-by {
        font-family: var(--serif-en);
        font-style: normal;
        font-size: 13px;
        font-weight: 400;
        line-height: 22.1px;
        letter-spacing: normal;
        color: var(--ink-faint);
        margin: 0;
        padding: 0;
        font-feature-settings: "liga" 1, "kern" 1;
        font-kerning: normal;
        font-variant: normal;
      }
      .also-by a {
        font-style: italic;
        color: var(--ink);
        border-bottom: 1px solid var(--rule);
        padding-bottom: 1px;
        transition: color 0.2s, border-color 0.2s;
      }
      .also-by a:hover { color: var(--seal); border-color: var(--seal); }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        height: 24px;
        margin: 0 0 11px;
        padding: 0;
        line-height: 24px;
      }

      li a {
        display: inline-flex;
        align-items: center;
        height: 24px;
        font-family: var(--serif-en);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: normal;
        color: var(--ink-soft);
        transition: color 0.2s;
        font-feature-settings: "liga" 1, "kern" 1;
        font-kerning: normal;
        font-variant: normal;
      }
      li a:hover { color: var(--seal); }

      .colophon-final {
        padding-top: 24px;
        font-family: var(--mono);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--ink-faint);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;
        flex-wrap: wrap;
        font-feature-settings: normal;
        font-variant: normal;
      }

      @media (max-width: 1100px) {
        .foot-cols { grid-template-columns: 1fr 1fr; gap: 40px; }
      }

      @media (max-width: 720px) {
        footer { padding: 60px 20px 20px; }
        .foot-mark .ampers { font-size: 56px; }
        .foot-cols { grid-template-columns: 1fr; gap: 36px; }
        .colophon-final { flex-direction: column; gap: 6px; text-align: center; align-items: stretch; }
      }
    </style>

    <footer aria-label="Spatial Flow Journal colophon">
      <div class="foot-mark">
        <div class="ampers">Spatial <em>Flow</em></div>
        <span class="cn">空 間 手 記</span>
        <span class="sub">A journal of rooms, materials &amp; ways of living</span>
      </div>

      <div class="foot-cols">
        <div>
          <h5>The Journal <span class="cn">關 於</span></h5>
          <p class="mission">A collection of observations about spaces we inhabit, the objects we choose, and the ways ordinary surroundings shape everyday life.</p>
          <p class="also-by">From the makers of<br><a href="<?php echo esc_url( spatial_flow_main_site_url( '/' ) ); ?>">Spatial Flow →</a></p>
        </div>

        <nav aria-label="Read">
          <h5>Read <span class="cn">讀</span></h5>
          <ul>\n${sfR3Menus.read}\n</ul>
        </nav>

        <nav aria-label="Speak">
          <h5>Explore <span class="cn">尋</span></h5>
          <ul>\n${sfR3Menus.explore}\n</ul>
        </nav>

        <nav aria-label="Studio">
          <h5>Elsewhere <span class="cn">連</span></h5>
          <ul>\n${sfR3Menus.elsewhere}\n</ul>
        </nav>
      </div>

      <div class="colophon-final">
        <span>© <?php echo esc_html( wp_date( 'Y' ) ); ?> Spatial Flow Journal</span>
        <span>Spaces · Materials · Everyday Living</span>
        <span>JOURNAL · ARTICLES · TOPICS</span>
      </div>
    </footer>
  `;

  class InkEastFooter extends HTMLElement {
    constructor() {
      super();
      this._snapFrame = 0;
      this._scheduleSnap = this._scheduleSnap.bind(this);
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(template.content.cloneNode(true));
      }

      this._scheduleSnap();
      window.addEventListener('load', this._scheduleSnap, { once: true });
      window.addEventListener('resize', this._scheduleSnap);

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(this._scheduleSnap);
      }
    }

    disconnectedCallback() {
      window.removeEventListener('resize', this._scheduleSnap);
      if (this._snapFrame) cancelAnimationFrame(this._snapFrame);
    }

    _scheduleSnap() {
      if (this._snapFrame) cancelAnimationFrame(this._snapFrame);
      this._snapFrame = requestAnimationFrame(() => {
        this._snapFrame = 0;
        this.style.setProperty('--footer-snap-y', '0px');

        const rect = this.getBoundingClientRect();
        const absoluteBottom = rect.bottom + window.scrollY;
        const documentBottom = document.documentElement.scrollHeight;
        const delta = documentBottom - absoluteBottom;

        this.style.setProperty('--footer-snap-y', `${delta.toFixed(3)}px`);
      });
    }
  }

  if (!customElements.get('ink-east-footer')) {
    customElements.define('ink-east-footer', InkEastFooter);
  }
})();

</script>

