const createCardDetails = useMemo(() => {
    return database.map(({ id, title, list, link }, index) => (
      <div key={index} className='cardDetails' ref={wrapperRef}>
        <div className='cardHeader'>
          <h4>{title}</h4>
        </div>
        <div className='cardBody'>
          <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
          </ul>
          <a href={link}>
            Watch video <Icon type='arrowRight' />
          </a>
        </div>
      </div>
    ));
  }, [database]);

  /////////////////
  <div className='cardDetails' ref={wrapperRef}>
      <div className='cardHeader'>
        <h4>Platform Keypoints</h4>
      </div>
      <div className='cardBody'>
        <ul>
          <li>Independent and digitized</li>
          <li>New economic model</li>
          <li>Build local ecosystems</li>
        </ul>
        <a href='#'>
          Watch video <Icon type='arrowRight' />
        </a>
      </div>
    </div>