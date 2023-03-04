const { Pins } = require('../../models');

class PinRepository {
  constructor() {}
  // 게시글 목록 조회
  findAll = async () => {
    const pins = await Pins.findAll({
      order: [['createdAt', 'DESC']],
    });
    return pins;
  };

  // 게시글 id로 조회
  findByPinId = async ({ pinId }) => {
    const pin = await Pins.findOne({
      where: { pinId },
    });
    return pin;
  };
  // 게시글 생성
  create = async ({ userId, title, imageUrl, description, hashtags }) => {
    await Pins.create({
      userId,
      title,
      imageUrl,
      description,
      hashtags,
    });
    return;
  };

  // 게시글 수정
  update = async ({
    userId,
    pinId,
    title,
    imageUrl,
    description,
    hashtags,
  }) => {
    await Pins.update(
      { title, imageUrl, description, hashtags },
      {
        where: { pinId },
      },
    );
    return;
  };

  // 게시글 삭제
  delete = async ({ pinId }) => {
    await Pins.destroy({
      where: { pinId },
    });
    return;
  };
}

module.exports = PinRepository;