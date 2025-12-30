class ContentService {
    getVisionMission() {
        return {
            vision: {
                title: 'Tầm nhìn',
                content: 'Trở thành tổ chức từ thiện uy tín hàng đầu Việt Nam, nơi kết nối những tấm lòng nhân ái để mang lại cơ hội phát triển bền vững cho trẻ em và cộng đồng.'
            },
            mission: {
                title: 'Sứ mệnh',
                content: 'Hỗ trợ giáo dục, y tế và phúc lợi xã hội cho trẻ em và gia đình có hoàn cảnh khó khăn, góp phần xây dựng một xã hội công bằng và nhân văn hơn.'
            },
            coreValues: [
                {
                icon: 'heart',
                title: 'Tận tâm',
                description: 'Đặt trái tim vào mọi hành động vì cộng đồng'
                },
                {
                icon: 'shield',
                title: 'Minh bạch',
                description: 'Công khai rõ ràng về nguồn gốc và sử dụng quỹ'
                },
                {
                icon: 'users',
                title: 'Hợp tác',
                description: 'Kết nối và hợp tác với các tổ chức, cá nhân'
                },
                {
                icon: 'star',
                title: 'Bền vững',
                description: 'Tạo ra những tác động lâu dài cho cộng đồng'
                }
            ]
        };
    }

    getTeamMembers() {
        return {
            leadership: [
                {
                name: 'Nguyễn Văn A',
                position: 'Chủ tịch Hội đồng Quản trị',
                image: '/images/team/member-1.jpg',
                bio: 'Hơn 20 năm kinh nghiệm trong lĩnh vực từ thiện và phát triển cộng đồng'
                },
                {
                name: 'Trần Thị B',
                position: 'Giám đốc Điều hành',
                image: '/images/team/member-2.jpg',
                bio: 'Chuyên gia về quản lý dự án xã hội và huy động nguồn lực'
                }
            ],
            staff: [
                {
                name: 'Lê Văn C',
                position: 'Trưởng phòng Chương trình',
                image: '/images/team/member-3.jpg'
                },
                {
                name: 'Phạm Thị D',
                position: 'Trưởng phòng Truyền thông',
                image: '/images/team/member-4.jpg'
                }
            ]
        };
    }

    getEducationPrograms() {
        return {
            overview: 'Chương trình hỗ trợ giáo dục của chúng tôi tập trung vào việc tạo cơ hội học tập cho trẻ em vùng khó khăn, giúp các em có thể tiếp cận giáo dục chất lượng.',
            programs: [
                {
                id: 'scholarship',
                title: 'Học bổng Bông Hồng Nhỏ',
                description: 'Trao học bổng cho học sinh nghèo vượt khó học giỏi',
                image: '/images/programs/scholarship.jpg',
                beneficiaries: '500+ học sinh',
                status: 'Đang triển khai'
                },
                {
                id: 'library',
                title: 'Thư viện Tri thức',
                description: 'Xây dựng thư viện và tặng sách cho các trường học vùng xa',
                image: '/images/programs/library.jpg',
                beneficiaries: '50+ trường học',
                status: 'Đang triển khai'
                },
                {
                id: 'classroom',
                title: 'Lớp học Yêu thương',
                description: 'Sửa chữa và xây dựng phòng học cho các em nhỏ',
                image: '/images/programs/classroom.jpg',
                beneficiaries: '30+ lớp học',
                status: 'Hoàn thành 2024'
                }
            ]
        };
    }

    getHealthcarePrograms() {
        return {
            overview: 'Mang dịch vụ y tế đến gần hơn với cộng đồng, đặc biệt là trẻ em và người già ở vùng sâu vùng xa.',
            programs: [
                {
                id: 'medical-checkup',
                title: 'Khám bệnh từ thiện',
                description: 'Tổ chức các đợt khám bệnh miễn phí cho người nghèo',
                image: '/images/programs/medical.jpg',
                beneficiaries: '2000+ người',
                status: 'Định kỳ hàng quý'
                },
                {
                id: 'surgery-support',
                title: 'Hỗ trợ phẫu thuật',
                description: 'Tài trợ chi phí phẫu thuật cho trẻ em mắc bệnh hiểm nghèo',
                image: '/images/programs/surgery.jpg',
                beneficiaries: '100+ ca phẫu thuật',
                status: 'Đang triển khai'
                },
                {
                id: 'nutrition',
                title: 'Dinh dưỡng cho trẻ',
                description: 'Cung cấp sữa và thực phẩm dinh dưỡng cho trẻ em suy dinh dưỡng',
                image: '/images/programs/nutrition.jpg',
                beneficiaries: '800+ trẻ em',
                status: 'Đang triển khai'
                }
            ]
        };
    }

    getSocialPrograms() {
        return {
            overview: 'Chăm lo đời sống tinh thần và vật chất cho các đối tượng yếu thế trong xã hội.',
            programs: [
                {
                id: 'elderly-care',
                title: 'Chăm sóc Người cao tuổi',
                description: 'Hỗ trợ người cao tuổi cô đơn, không nơi nương tựa',
                image: '/images/programs/elderly.jpg',
                beneficiaries: '300+ người',
                status: 'Đang triển khai'
                },
                {
                id: 'disaster-relief',
                title: 'Cứu trợ Thiên tai',
                description: 'Hỗ trợ khẩn cấp cho đồng bào vùng thiên tai',
                image: '/images/programs/disaster.jpg',
                beneficiaries: 'Theo tình hình',
                status: 'Sẵn sàng'
                },
                {
                id: 'housing',
                title: 'Nhà Tình thương',
                description: 'Xây dựng và sửa chữa nhà cho hộ nghèo',
                image: '/images/programs/housing.jpg',
                beneficiaries: '50+ hộ gia đình',
                status: 'Đang triển khai'
                }
            ]
        };
    }

    getFundraisingInfo() {
        return {
            overview: 'Các hoạt động gây quỹ để duy trì và mở rộng các chương trình thiện nguyện.',
            campaigns: [
                {
                id: 'monthly-donor',
                title: 'Đồng hành hàng tháng',
                description: 'Trở thành nhà tài trợ thường xuyên với khoản đóng góp hàng tháng',
                minimumAmount: '100,000 VNĐ',
                benefits: ['Báo cáo định kỳ', 'Tham gia sự kiện', 'Chứng nhận đóng góp']
                },
                {
                id: 'charity-event',
                title: 'Sự kiện từ thiện',
                description: 'Tham gia các buổi gala, đấu giá từ thiện, chạy bộ gây quỹ',
                upcomingEvents: [
                    'Gala từ thiện cuối năm',
                    'Marathon vì trẻ em',
                    'Đêm nhạc thiện nguyện'
                ]
                },
                {
                id: 'corporate',
                title: 'Đối tác Doanh nghiệp',
                description: 'Hợp tác với doanh nghiệp để tạo ra các chương trình CSR ý nghĩa',
                benefits: ['Nâng cao hình ảnh thương hiệu', 'Trách nhiệm xã hội', 'Kết nối cộng đồng']
                }
            ]
        };
    }

    getReports() {
        return [
        {
            id: 1,
            title: 'Báo cáo tài chính năm 2024',
            type: 'Tài chính',
            date: '2024-12-01',
            downloadUrl: '/files/reports/financial-2024.pdf',
            summary: 'Tổng hợp thu chi và sử dụng quỹ trong năm 2024'
        },
        {
            id: 2,
            title: 'Báo cáo hoạt động Quý 4/2024',
            type: 'Hoạt động',
            date: '2024-11-15',
            downloadUrl: '/files/reports/activity-q4-2024.pdf',
            summary: 'Các chương trình và dự án đã thực hiện trong quý 4'
        },
        {
            id: 3,
            title: 'Báo cáo tác động xã hội 2024',
            type: 'Tác động',
            date: '2024-10-20',
            downloadUrl: '/files/reports/impact-2024.pdf',
            summary: 'Đánh giá tác động của các chương trình đến cộng đồng'
        }
        ];
    }

    getImpactStories() {
        return [
        {
            id: 1,
            title: 'Em Hồng và giấc mơ làm bác sĩ',
            excerpt: 'Từ một em bé mồ côi đến sinh viên y khoa xuất sắc',
            image: '/images/stories/story-1.jpg',
            date: '2024-12-15',
            category: 'Giáo dục',
            readTime: '5 phút'
        },
        {
            id: 2,
            title: 'Lớp học giữa núi rừng',
            excerpt: 'Hành trình xây dựng ngôi trường ở vùng cao Hà Giang',
            image: '/images/stories/story-2.jpg',
            date: '2024-12-01',
            category: 'Giáo dục',
            readTime: '7 phút'
        },
        {
            id: 3,
            title: 'Ca phẫu thuật đổi đời',
            excerpt: 'Bé Minh và ca phẫu thuật tim bẩm sinh thành công',
            image: '/images/stories/story-3.jpg',
            date: '2024-11-20',
            category: 'Y tế',
            readTime: '6 phút'
        },
        {
            id: 4,
            title: 'Ngôi nhà yêu thương',
            excerpt: 'Gia đình bà Năm và căn nhà mới sau bão lũ',
            image: '/images/stories/story-4.jpg',
            date: '2024-11-10',
            category: 'Bác ái',
            readTime: '4 phút'
        }
        ];
    }

    getStoryById(id) {
        const stories = this.getImpactStories();
        const story = stories.find(s => s.id === parseInt(id));
        
        if (!story) return null;

        return {
            ...story,
            content: `Nội dung chi tiết của câu chuyện ${story.title}...`,
            author: 'Ban Truyền thông LRF',
            tags: ['thiện nguyện', story.category.toLowerCase()]
        };
    }

    getDocuments() {
        return [
        {
            id: 1,
            title: 'Hướng dẫn quyên góp và sử dụng quỹ',
            type: 'PDF',
            size: '2.5 MB',
            downloadUrl: '/files/documents/donation-guide.pdf'
        },
        {
            id: 2,
            title: 'Quy chế hoạt động của Quỹ',
            type: 'PDF',
            size: '1.8 MB',
            downloadUrl: '/files/documents/regulations.pdf'
        },
        {
            id: 3,
            title: 'Biểu mẫu đăng ký tình nguyện viên',
            type: 'DOCX',
            size: '0.5 MB',
            downloadUrl: '/files/documents/volunteer-form.docx'
        },
        {
            id: 4,
            title: 'Hướng dẫn đối tác doanh nghiệp',
            type: 'PDF',
            size: '3.2 MB',
            downloadUrl: '/files/documents/corporate-partnership.pdf'
        }
        ];
    }

    getStatistics() {
        return {
            totalDonors: 5000,
            totalBeneficiaries: 10000,
            totalProjects: 50,
            totalAmount: '15,000,000,000 VNĐ'
        };
    }
}

module.exports = new ContentService();
